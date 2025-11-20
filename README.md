# Proyecto Ingenieria y Desarrollo Sustentable UCN

### Objetivo General:

Desarrollar un sistema de arriendo de bicicletas eléctricas alimentadas por energía solar en la comuna de Coquimbo, que
promueva la movilidad sustentable mediante la instalación de
bicicleteros solares inteligentes y una aplicación web para la
gestión y monitoreo del servicio.

### Para compilar localmente el proyecto:
Creamos una carpeta y clonamos el repositorio:
```
git init
git clone https://github.com/MotelPaso/Bicicletero.git
```
Luego, se debe tener instalado Node.js y correr el siguiente comando en la carpeta base del proyecto:
```
cd Bicicletero/frontend
npm install
npm run dev
```
Esto solo iniciará el frontend, para el backend se debe instalar uvicorn y fastapi con los siguientes comandos en otra terminal:
```
cd backend
python -m venv venv
```
Deberia existir en tu carpeta backend una capeta llamada venv
Ahora entraremos activaremos el entorno de venv
```
cd backend/venv/Scripts
.\activate
cd ..
cd ..
pip install -r requirements.txt
```
Instalamos todas las dependencias para el backend, para iniciarlo se pone este comando estando en la carpeta backend:
```
uvicorn main:app --reload
```
Asegurate que el backend se inicialize en la siguiente direccion:
http://127.0.0.1:8000 \
si no, puedes cambiar el link en services/api donde dice baseURL
