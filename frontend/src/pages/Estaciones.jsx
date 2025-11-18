import Estacion from "../components/Estacion";
import api from "../services/api";
import "../global.css";
import { useEffect, useState } from "react";
import FormularioBicis from "../components/FormularioBicis";

function Estaciones() {
	const [estaciones, setEstaciones] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [error, setError] = useState(false);
	const [estacionSeleccionada, setEstacionSeleccionada] = useState(null);

	const mostrarBicis = (id) => {
		setEstacionSeleccionada(estacionSeleccionada === id ? null : id);
	};

	const fetchEstaciones = async () => {
		try {
			const estacionesBack = await api.get("/bicis");
			setEstaciones(estacionesBack.data);
			console.log("Cargado!");
		} catch (error) {
			setError(true);
			console.log(error);
		} finally {
			setCargando(false);
		}
	};

	const recargarPagina = () => {
		window.location.reload();
	};

	useEffect(() => {
		fetchEstaciones();
	}, []);

	return (
		<div className="flex flex-col justify-around">
			<div className="flex justify-center">
				<h1 className="font-bold text-[48px] text-(--DTitle)">
					Lista de Estaciones
				</h1>
			</div>
			{error && (
				<>
					<div className="flex flex-row justify-center items-center gap-4">
						<h2 className="font-normal text-[24px] text-(--DText)">
							No he podido cargar las estaciones...
						</h2>
						<button
							onClick={recargarPagina}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Reintentar
						</button>
					</div>
				</>
			)}
			{estaciones.map((estacion) => (
				<div key={estacion.id} className="flex flex-row items-start">
					<div className="w-[55%]">
						<Estacion
							datos={estacion}
							toggle={() => mostrarBicis(estacion.id)}
						/>
					</div>

					<div className="w-[45%]">
						<FormularioBicis
							mostrar={estacionSeleccionada === estacion.id}
							bicicletas={estacion.bicicletas}
						/>
					</div>
				</div>
			))}
		</div>
	);
}

export default Estaciones;
