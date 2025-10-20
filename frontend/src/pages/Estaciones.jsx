import Estacion from "../components/Estacion";
import api from "../services/api";
import { useEffect, useState } from "react";

function Estaciones() {
	const [estaciones, setEstaciones] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [error, setError] = useState(false);

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
			{error && (
				<>
					<div className="flex flex-row justify-center items-center gap-4">
						<h2>No he podido cargar las estaciones...</h2>
						<button
							onClick={recargarPagina}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Reintentar
						</button>
					</div>
				</>
			)}
			<h1>Estaciones:</h1>
			{estaciones.map((estacion) => (
				<Estacion datos={estacion} key={estacion.id} />
			))}
		</div>
	);
}

export default Estaciones;
