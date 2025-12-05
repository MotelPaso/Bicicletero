#include <WiFi.h>
#include <HTTPClient.h>

// ==========================================
// 1. CONFIGURACIÓN DE RED
// ==========================================
const char* ssid     = "Mike";     // <--- PON TU WIFI
const char* password = "443TVC9P"; // <--- PON TU CLAVE

// Tu IP Pública (la que estás usando actualmente)
const char* server_host = "179.8.199.30"; 
const int   server_port = 8000;

// ==========================================
// 2. CONFIGURACIÓN DE LA DEMO
// ==========================================
const int   ID_BICI_DEMO = 7;     // Siempre usaremos el ID 7
const float DISTANCIA_UMBRAL = 10.0; // 10 cm es el límite

// ==========================================
// 3. PINES DEL SENSOR (HC-SR04)
// ==========================================
const int TRIG_PIN = 33;  
const int ECHO_PIN = 32; 

// Estado: true = Bici está en la estación (cerca), false = Bici se fue (lejos)
bool biciEstaPuesta = true; 
float distanciaActual = 0.0;

// ==========================================
// FUNCIONES DE RED
// ==========================================

void conectarWiFi() {
  Serial.print("Conectando a WiFi: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\n¡WiFi Conectado!");
}

// ------------------------------------------------------
// FUNCIÓN 1: LLAMADA POST /users/saveBici (Bici se va)
// ------------------------------------------------------
void llamarSaveBici(int id) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    
    // FastAPI espera el idBici como query parameter: ?idBici=7
    String url = "http://" + String(server_host) + ":" + String(server_port) + 
                 "/users/saveBici?idBici=" + String(id);

    Serial.println(">>> [Bici se fue] Enviando POST a: " + url);

    http.begin(url);
    // Aunque enviamos el ID en la URL, un POST vacío suele requerir indicar la longitud 0 
    // o simplemente llamar a POST sin payload.
    int httpResponseCode = http.POST(""); 

    if (httpResponseCode > 0) {
      Serial.print("Éxito. Código: "); Serial.println(httpResponseCode);
    } else {
      Serial.print("Error: "); Serial.println(http.errorToString(httpResponseCode));
    }
    http.end();
  }
}

// ------------------------------------------------------
// FUNCIÓN 2: LLAMADA GET /resetBicis (Bici vuelve)
// ------------------------------------------------------
void llamarResetBicis() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    String url = "http://" + String(server_host) + ":" + String(server_port) + 
                 "/resetBicis";

    Serial.println("<<< [Bici volvió] Enviando GET a: " + url);

    http.begin(url);
    int httpResponseCode = http.GET(); // Usamos GET

    if (httpResponseCode > 0) {
      Serial.print("Éxito. Código: "); Serial.println(httpResponseCode);
    } else {
      Serial.print("Error: "); Serial.println(http.errorToString(httpResponseCode));
    }
    http.end();
  }
}

// ==========================================
// LECTURA DE SENSOR
// ==========================================
float leerDistancia() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duracion = pulseIn(ECHO_PIN, HIGH);
  float distancia = duracion * 0.0343 / 2;

  if (distancia == 0 || distancia > 400) return -1.0; 
  return distancia;
}

// ==========================================
// SETUP & LOOP
// ==========================================
void setup() {
  Serial.begin(115200);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

  conectarWiFi();
}

void loop() {
  // Verificar WiFi
  if (WiFi.status() != WL_CONNECTED) conectarWiFi();

  distanciaActual = leerDistancia();

  if (distanciaActual != -1.0) {
    Serial.print("Distancia: "); 
    Serial.print(distanciaActual); 
    Serial.println(" cm");

    // CASO 1: LA BICICLETA SE VA (Distancia > 10cm)
    // Condición: Distancia alta Y el sistema aún cree que la bici está puesta
    if (distanciaActual > DISTANCIA_UMBRAL && biciEstaPuesta == true) {
      
      llamarSaveBici(ID_BICI_DEMO); // Llama a POST /users/saveBici
      
      biciEstaPuesta = false; // Actualizamos estado: Bici NO está
      delay(2000); 
    }

    // CASO 2: LA BICICLETA VUELVE (Distancia < 10cm)
    // Condición: Distancia baja Y el sistema cree que la bici NO está
    else if (distanciaActual <= DISTANCIA_UMBRAL && biciEstaPuesta == false) {
      
      llamarResetBicis(); // Llama a GET /resetBicis
      
      biciEstaPuesta = true; // Actualizamos estado: Bici SÍ está
      delay(2000); 
    }
  }

  delay(500); 
}