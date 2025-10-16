function Estacion({ datos }) {
	return (
		<div className="estacion flex flex-col justify-center items-center">
			<h2>Estacion {datos.id}</h2>
			<div className="estacion-datos">
				<p>Bicicletas disponibles: {datos.bicicletas}</p>
			</div>
		</div>
	);
}

export default Estacion;
