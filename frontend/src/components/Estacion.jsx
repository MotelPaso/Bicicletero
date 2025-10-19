import { useState } from "react";
import Bicicleta from "./Bicicleta";

function Estacion({ datos }) {
	const [mostrar, setMostrar] = useState(false);

	const mostrarBicis = () => {
		setMostrar(!mostrar);
	};

	return (
		<div className="flex flex-row ">
			<div className="flex flex-col w-[32%] py-[20px]">
				<h1 className="text-4xl text-left py-[8px]">
					Estacion {datos.id}: {datos.nombre}
				</h1>

				<h2 className="text-2xl text-left ">{datos.ubicacion}</h2>
			</div>
			<div className="flex flex-col justify-start items-start mt-[20px]">
				<button
					className="border-2 border-black text-lg text-black bg-sky-200 hover:bg-sky-300 rounded-md h-[60px] w-[100%] self-center"
					onClick={mostrarBicis}
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

			{mostrar && (
				<div className="flex flex-col justify-center items-center m-[20px] border-3 border-black p-[24px] w-[50%]">
					{datos.bicicletas.length === 0 && (
						<h2 className="text-3xl my-3">
							No hay bicicletas disponibles en esta estacion.
						</h2>
					)}

					{datos.bicicletas.length > 0 && (
						<>
							<h2 className="text-4xl ">
								Bicicletas en la estacion:
							</h2>

							<form className="w-full">
								<div className="flex flex-row justify-between items-center">
									<p>Select</p>
									<p>Marca</p> <p>Carga</p>
								</div>
								{datos.bicicletas.map((bici) => (
									<Bicicleta key={bici.id} bici={bici} />
								))}
								<button
									className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
									type="submit"
								>
									Seleccionar
								</button>
							</form>
						</>
					)}
				</div>
			)}
		</div>
	);
}

export default Estacion;
