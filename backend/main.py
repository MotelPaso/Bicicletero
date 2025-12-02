from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import database

app = FastAPI()

origins = [
    # 1. Tu frontend (puerto 80)
    "http://192.168.1.20",
    "http://192.168.1.20:8080",
    # 2. Tu frontend durante desarrollo local (si usas otro puerto, ej. 3000)
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:3000",
    # 3. Permite la comunicación interna de Docker (opcional, pero útil)
    "http://frontend",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/bicis")
def getEstaciones():
    return database.estaciones

@app.get("/bicis/disponibles")
def revisarExiste(id:int):
    if id > len(database.bicicletas):
        return False
    for bici in database.bicicletas:
        if bici["id"] in database.bicicletas and bici["disponible"]:
            return True
        elif id in database.bicicletasNoDisponibles:
            return False


@app.post("/users/addUser")
def addUser(data:dict):
    name = data["username"]
    pwd = data["password"]
    for user in database.users:
        if name == user["name"]:
            return False
    database.users.append({"name": name, "password": pwd, "acceso":False})
    return True


@app.post("/users/checkUser")
def checkUser(data:dict):
    name = data["username"]
    pwd = data["password"]
    for user in database.users:
        if name == user["name"]:
            if pwd == user["password"]:
                return True
            else:
                return False
    return False

@app.post("/users/saveBici")
def saveBici(idBici:int):
    if (len(database.bicicletaSeleccionada) == 1):
        database.bicicletaSeleccionada.clear()
    database.bicicletaSeleccionada.append(database.bicicletas[idBici - 1])
    database.bicicletas[idBici - 1]["disponible"] = False
    return True

@app.get("/users/getBiciSelect")
def getBiciSelect():
    if len(database.bicicletaSeleccionada) < 1:
        return False
    return database.bicicletaSeleccionada[0]