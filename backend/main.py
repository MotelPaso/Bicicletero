from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import base64
import database

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # puedes limitarlo luego a ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/bicis")
def getBicicletas():
    return database.bicicletas

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
def addUser(name:str, pwd:str):
    for user in database.users:
        if name in user["name"]:
            return "Usuario ya existe!"
    pwd = hash(pwd)
    database.users.append({"name": name, "password": pwd, "acceso":False})
    return "Usuario Registrado!"


def hash(pwd:str):
    byte = pwd.encode("utf-8")
    encoding = base64.b64encode(byte)
    return encoding.decode("utf-8")
