users = [
    {"name": "motelo", "password": "1234", "acceso": True},
    {"name": "admin", "password": "admin", "acceso": True},
    {"name": "hola", "password": "no", "acceso": False},
]

bicicletas = [
    {"id": 1, "marca": "Citroen",      "carga": 88, "disponible": True,  "estacion": 1},
    {"id": 2, "marca": "Trek",         "carga": 80, "disponible": False, "estacion": 2},
    {"id": 3, "marca": "Specialized",  "carga": 92, "disponible": True,  "estacion": 3},
    {"id": 4, "marca": "Giant",        "carga": 83, "disponible": True,  "estacion": 1},
    {"id": 5, "marca": "Cannondale",   "carga": 90, "disponible": False, "estacion": 2},
    {"id": 6, "marca": "Scott",        "carga": 82, "disponible": True,  "estacion": 3},
    {"id": 7, "marca": "Bmc",          "carga": 100,"disponible": True,  "estacion": 1},
    {"id": 8, "marca": "Bianchi",      "carga": 76, "disponible": False, "estacion": 2},
    {"id": 9, "marca": "Merida",       "carga": 84, "disponible": True,  "estacion": 3},
    {"id": 10, "marca": "Cube",        "carga": 89, "disponible": True,  "estacion": 1},
    {"id": 11, "marca": "Gt",          "carga": 81, "disponible": False, "estacion": 2},
    {"id": 12, "marca": "Santa Cruz",  "carga": 95, "disponible": True,  "estacion": 3},
    {"id": 13, "marca": "Yet",         "carga": 79, "disponible": True,  "estacion": 1},
    {"id": 14, "marca": "Kona",        "carga": 91, "disponible": False, "estacion": 2},
    {"id": 15, "marca": "Orbea",       "carga": 94, "disponible": True,  "estacion": 3},
    {"id": 16, "marca": "Bianchi",     "carga": 78, "disponible": True,  "estacion": 1},
    {"id": 17, "marca": "Pinarello",   "carga": 90, "disponible": True,  "estacion": 2},
    {"id": 18, "marca": "Cervelo",     "carga": 94, "disponible": True,  "estacion": 3},
    {"id": 19, "marca": "Felt",        "carga": 75, "disponible": True,  "estacion": 1},
    {"id": 20, "marca": "Fuji",        "carga": 96, "disponible": False, "estacion": 2}
]



estaciones = [
    {"id": 1, "nombre": "Universidad Catolica del Norte", "ubicacion": "Larrondo 1281", "bicicletas": [bici for bici in bicicletas if bici["estacion"] == 1 and bici["disponible"]], "mapa": "https://maps.app.goo.gl/WwC98kNv6XzFx7bWA"},
    {"id": 2, "nombre": "Terminal de Buses", "ubicacion": "todo" ,"bicicletas": [bici for bici in bicicletas if bici["estacion"] == 2 and bici["disponible"]]},
    {"id": 3, "nombre": "Plaza de Armas", "ubicacion": "todo" ,"bicicletas": [bici for bici in bicicletas if bici["estacion"] == 3 and bici["disponible"]]}
]

bicicletaSeleccionada = []



