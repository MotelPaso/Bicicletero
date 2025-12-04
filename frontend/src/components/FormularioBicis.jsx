import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bicicleta from "./Bicicleta";
import api from "../services/api";

export default function FormularioBicis({ mostrar, bicicletas }) {
	const [biciSeleccionada, setBiciSeleccionada] = useState(null);
	const [biciGuardada, setBiciGuardada] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!biciSeleccionada) {
			alert("Selecciona una bici antes de continuar.");
			return;
		}
		console.log("Bici seleccionada:", biciSeleccionada);
		guardarBici(biciSeleccionada);
	};
	const guardarBici = async (bici) => {
		try {
			const query = await api.post(`/users/saveBici?idBici=${bici}`);
			console.log(query);
			if (query.data) {
				setBiciGuardada(biciSeleccionada);
			}
		} catch (e) {
			console.error(e);
		}
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
								Bicicletas en la estación:
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
					{biciGuardada && (
						<div className="text-(--DText)">
							<h1 className="text-[20px]">Bicicleta guardada!</h1>
							<p>
								Ve a{" "}
								<Link
									className="text-sky-500 hover:text-sky-700"
									to="/mis-bicis"
								>
									Mis Bicicletas
								</Link>{" "}
								para ver sus datos en detalle
							</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
