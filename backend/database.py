users = [
    {"name": "motelo", "password": "1234", "acceso": True},
    {"name": "admin", "password": "admin", "acceso": True},
    {"name": "hola", "password": "no", "acceso": False},
]

bicicletas = [
    {"id": 1, "marca": "Citroen", "carga": 20, "disponible": True, "estacion": 1},
    {"id": 2, "marca": "Trek", "carga": 15, "disponible": False, "estacion": 2},
    {"id": 3, "marca": "Specialized", "carga": 25, "disponible": True, "estacion": 3},
    {"id": 4, "marca": "Giant", "carga": 18, "disponible": True, "estacion": 1},
    {"id": 5, "marca": "Cannondale", "carga": 22, "disponible": False, "estacion": 2},
    {"id": 6, "marca": "Scott", "carga": 17, "disponible": True, "estacion": 3},
    {"id": 7, "marca": "Bmc", "carga": 30, "disponible": True, "estacion": 1},
    {"id": 8, "marca": "Bianchi", "carga": 12, "disponible": False, "estacion": 2},
    {"id": 9, "marca": "Merida", "carga": 19, "disponible": True, "estacion": 3},
    {"id": 10, "marca": "Cube", "carga": 21, "disponible": True, "estacion": 1},
    {"id": 11, "marca": "Gt", "carga": 16, "disponible": False, "estacion": 2},
    {"id": 12, "marca": "Santa Cruz", "carga": 28, "disponible": True, "estacion": 3},
    {"id": 13, "marca": "Yet", "carga": 14, "disponible": True, "estacion": 1},
    {"id": 14, "marca": "Kona", "carga": 23, "disponible": False, "estacion": 2},
    {"id": 15, "marca": "Orbea", "carga": 26, "disponible": True, "estacion": 3},
    {"id": 16, "marca": "Bianchi", "carga": 13, "disponible": True, "estacion": 1},
    {"id": 17, "marca": "Pinarello", "carga": 24, "disponible": True, "estacion": 2},
    {"id": 18, "marca": "Cervelo", "carga": 27, "disponible": True, "estacion": 3},
    {"id": 19, "marca": "Felt", "carga": 11, "disponible": True, "estacion": 1},
    {"id": 20, "marca": "Fuji", "carga": 29, "disponible": False, "estacion": 2}
]



estaciones = [
    {"id": 1, "nombre": "Universidad Catolica del Norte", "ubicacion": "Larrondo 1281", "bicicletas": [bici for bici in bicicletas if bici["estacion"] == 1 and bici["disponible"]], "mapa": "https://maps.app.goo.gl/WwC98kNv6XzFx7bWA"},
    {"id": 2, "nombre": "Terminal de Buses", "ubicacion": "todo" ,"bicicletas": [bici for bici in bicicletas if bici["estacion"] == 2 and bici["disponible"]]},
    {"id": 3, "nombre": "Plaza de Armas", "ubicacion": "todo" ,"bicicletas": [bici for bici in bicicletas if bici["estacion"] == 3 and bici["disponible"]]},
    {"id": 4, "nombre": "Casa del tutupi", "ubicacion": "todo" ,"bicicletas": [bici for bici in bicicletas if bici["estacion"] == 4 and bici["disponible"]]},
]



