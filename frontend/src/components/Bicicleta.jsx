export default function Bicicleta({ bici, seleccionada, onSelect }) {
	return (
		<div className="flex flex-row justify-between items-center my-2">
			<input
				className="m-[8px]"
				type="radio"
				name="bicis"
				checked={seleccionada === bici.id}
				onChange={onSelect}
			/>
			<span className="text-lg">Bici {bici.marca}</span>
			<span className="text-lg">{bici.carga}%</span>
		</div>
	);
}
