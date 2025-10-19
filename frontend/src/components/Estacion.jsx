import { useState } from "react";
import Bicicleta from "./Bicicleta";

function Estacion({ datos }) {
	const [mostrar, setMostrar] = useState(false);

	const mostrarBicis = () => {
		setMostrar(!mostrar);
	};
	return (
		<>
			<div className="flex flex-row items-center h-[600px] p-[50px]">
				<div>
					<h1 className="text-4xl p-[30px]">
						Estacion {datos.id}: {datos.nombre}
					</h1>

					<h2 className="text-3xl ">Ubicacion: {datos.ubicacion}</h2>
				</div>

				<button
					className="border-2 border-black p-2 text-xl text-black bg-sky-200"
					onClick={mostrarBicis}
				>
					Mostrar bicicletas
				</button>
			</div>

			{mostrar && (
				<div className="flex flex-col justify-left items-start m-[40px] border-3 border-black p-[20px] w-[50%]">
					<h2 className="text-4xl my-3">
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
				</div>
			)}
		</>
	);
}

export default Estacion;
