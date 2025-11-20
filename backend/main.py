from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import database

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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