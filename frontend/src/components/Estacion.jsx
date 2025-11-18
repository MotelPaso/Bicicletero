function Estacion({ datos, toggle }) {
	return (
		<>
			<div className="flex flex-row justify-between">
				<div className="flex flex-col py-[20px]">
					<h1 className="text-left text-(--DText) text-[20px]">
						Estacion {datos.id}:
					</h1>
					<h1 className="text-4xl text-left text-(--DTitle) py-[8px]">
						{datos.nombre}
					</h1>
					<h2 className="text-2xl text-left text-(--DText)">
						{datos.ubicacion}
					</h2>
				</div>
				<div className="flex flex-col justify-start items-start mt-[20px]">
					<button
						className="border-2 border-black text-lg text-black bg-sky-200 hover:bg-sky-300 rounded-md h-[60px] w-[100%] self-center px-[5px]"
						onClick={toggle}
					>
						Mostrar bicicletas
					</button>
					<button
						className="border-2 border-black text-lg text-black bg-sky-200 hover:bg-sky-300 rounded-md h-[60px] w-[100%] self-center"
						onClick={() => window.open(datos.mapa, "_blank")}
					>
						Ver Mapa
					</button>
				</div>
			</div>
		</>
	);
}

export default Estacion;
