from fastapi import FastAPI, HTTPException
import base64
import database

app = FastAPI()

@app.get("/bicis")
def mostrarBicicletas():
    return database.bicicletas

@app.get("/bicis/disponibles")
def revisarBicicleta(id:int):
    if id > len(database.bicicletas):
        return False
    for bici in database.bicicletas:
        if bici["id"] in database.bicicletas and bici["disponible"]:
            return True
        elif id in database.bicicletasNoDisponibles:
            return False


@app.get("/users/addUser")
def addUser(name:str, pwd:str):
    if name not in database.users:
        pwd = hash(pwd)
        database.users.append({"name": name, "password": pwd, "acceso":False})
        return "Usuario Registrado!"
    else:
        return "Usuario no registrado..."


def hash(pwd:str):
    byte = pwd.encode("utf-8")
    encoding = base64.b64encode(byte)
    return encoding.decode("utf-8")
