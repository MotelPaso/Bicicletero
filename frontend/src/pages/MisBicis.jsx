import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function MisBicis() {
	const navigate = useNavigate();
	const [biciSeleccionada, setBiciSeleccionada] = useState(null);

	const getBici = async () => {
		try {
			const datosBici = await api.get("/users/getBiciSelect");
			if (datosBici.data !== false) {
				setBiciSeleccionada(datosBici.data);
			}
		} catch (e) {
			console.log("no he podido llamar a la api...");
		}
	};
	const returnBici = async () => {
		try {
			const reset = await api.get("/resetBicis");
			if (reset) {
				alert("Bicicleta regresada.");
				navigate("/estaciones");
			} else {
				console.log("api no conectada...");
			}
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getBici();
	}, []);
	return (
		<>
			<div className="flex justify-center items-center">
				{biciSeleccionada === null && (
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-(--DText)">
							Todavia no eliges una bicicleta...
						</h1>
						<button
							className="bg-(--DLgBtn) w-[10vw]"
							onClick={() => {
								navigate("/estaciones");
							}}
						>
							Elegir una bici
						</button>
					</div>
				)}
				{biciSeleccionada !== null && (
					<div className="shadow-md shadow-black rounded-xl border-white p-6 w-full max-w-md">
						<h1 className="text-2xl font-semibold mb-4 text-(--DTitle)">
							Bicicleta Seleccionada
						</h1>

						<p className="text-lg text-(--DText) mb-1">
							<span className="font-medium">Marca:</span>{" "}
							{biciSeleccionada.marca}
						</p>

						<p className="text-lg text-(--DText) mb-4">
							<span className="font-medium">Carga:</span>{" "}
							{biciSeleccionada.carga}%
						</p>
						<p className="text-lg text-(--DText) mb-4">
							<span className="font-medium">
								Tiempo Restante:
							</span>{" "}
							{biciSeleccionada.tiempo} horas
						</p>

						<button
							className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition"
							onClick={returnBici}
						>
							Devolver
						</button>
					</div>
				)}
			</div>
		</>
	);
}
