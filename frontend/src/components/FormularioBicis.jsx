import { useState } from "react";
import Bicicleta from "./Bicicleta";

export default function FormularioBicis({ mostrar, bicicletas }) {
	const [biciSeleccionada, setBiciSeleccionada] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!biciSeleccionada) {
			alert("Selecciona una bici antes de continuar.");
			return;
		}
		// ejemplo: enviar al backend o manejar la seleccion
		console.log("Bici seleccionada:", biciSeleccionada);
		// aquí podrías hacer un fetch / api.post ...
	};

	return (
		<div className="flex justify-center">
			{mostrar && (
				<div
					className={`absolute flex flex-col border-2 border-white bg-black/20 backdrop-blur-md p-6 rounded-lg transition-all duration-300
        ${
			mostrar
				? "opacity-100 pointer-events-auto"
				: "opacity-0 pointer-events-none"
		}
    `}
				>
					{bicicletas.length === 0 && (
						<h2 className="text-[24px] my-3 text-(--DText)">
							No hay bicicletas disponibles en esta estacion.
						</h2>
					)}

					{bicicletas.length > 0 && (
						<>
							<h2 className="text-4xl text-(--DTitle) pb-4">
								Bicicletas en la estacion:
							</h2>

							<form
								className="w-full text-(--DText)"
								onSubmit={handleSubmit}
							>
								<div className="flex flex-row justify-between items-center">
									<p>Select</p>
									<p>Marca</p>
									<p>Carga</p>
								</div>

								{bicicletas.map((bici) => (
									<Bicicleta
										key={bici.id}
										bici={bici}
										seleccionada={biciSeleccionada}
										onSelect={() =>
											setBiciSeleccionada(bici.id)
										}
									/>
								))}

								<div className="mt-4">
									<button
										className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
										type="submit"
									>
										Seleccionar
									</button>
								</div>
							</form>
						</>
					)}
				</div>
			)}
		</div>
	);
}
