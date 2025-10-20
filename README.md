# Proyecto Ingenieria y Desarrollo Sustentable UCN

### Objetivo General:

Desarrollar un sistema de arriendo de bicicletas eléctricas alimentadas por energía solar en la comuna de Coquimbo, que
promueva la movilidad sustentable mediante la instalación de
bicicleteros solares inteligentes y una aplicación web para la
gestión y monitoreo del servicio.

### Para compilar localmente el proyecto:
Creamos una carpeta y clonamos el repositorio
```
git init
git clone https://github.com/MotelPaso/Bicicletero.git
```
Luego, se debe tener instalado Node.js y correr el siguiente comando en la carpeta frontend
```
cd frontend
npm install
npm run dev
```
Esto solo iniciará el frontend, para el backend se debe instalar uvicorn y fastapi con los siguientes comandos en otra terminal:
```
cd backend/venv/Scripts
python -m venv venv
pip install -r fastapi uvicorn
cd ..
cd ..
uvicorn main:app --reload
```
