export default function Bicicleta({ bici }) {
	return (
		<div className="flex flex-row justify-between items-center my-2">
			<input
				className="m-[8px]"
				type="radio"
				name="#bici"
				id={`bici-${bici.id}`}
			/>
			<span className="text-lg">Bici {bici.marca}</span>
			<span className="text-lg">{bici.carga}%</span>
		</div>
	);
}
