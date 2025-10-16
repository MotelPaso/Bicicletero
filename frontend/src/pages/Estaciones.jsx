import Estacion from "../components/Estacion";
import api from "../services/api";
import { useEffect, useState } from "react";

function Estaciones() {
	const [estaciones, setEstaciones] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [error, setError] = useState(null);

	const fetchEstaciones = async () => {
		try {
			const estacionesBack = await api.get("/bicis");
			setEstaciones(estacionesBack.data);
			console.log("Cargado!");
		} catch (error) {
			setError("No he podido cargar las estaciones...");
			console.log(error);
		} finally {
			setCargando(false);
		}
	};

	useEffect(() => {
		fetchEstaciones();
	}, []);

	return (
		<div className="flex flex-row justify-around">
			{estaciones.map((estacion) => (
				<Estacion datos={estacion} key={estacion.id} />
			))}
		</div>
	);
}

export default Estaciones;
