import "../global.css";

export default function About() {
	return (
		<div className="flex flex-row justify-center w-[100%]">
			<div className="flex flex-col border-2 border-(--DBorder) w-[35%]">
				<h1 className="text-[30px] font-medium text-(--DTitle)">
					Integrantes del proyecto
				</h1>
				<div className="flex flex-col text-(--DText)">
					<Integrantes nombre="Paulo Araya" aporte="Lider" />
					<Integrantes nombre="Diego Malebrán" aporte="Organizador" />
					<Integrantes nombre="Estefania Ulloa" aporte="Diseñadora" />
					<Integrantes
						nombre="Roger Villarroel"
						aporte="Programador"
					/>
				</div>
				<div>
					<p className="font-medium text-[24px] text-(--DText)">
						Para Ingenieria y Desarrollo Sustentable - UCN
					</p>
				</div>
			</div>
		</div>
	);
}

function Integrantes({ nombre, aporte }) {
	return (
		<>
			<div className="flex flex-row justify-center items-center pl-[24px] py-[4px]">
				<p className="text-[24px] font-normal">
					{nombre} - {aporte}
				</p>
			</div>
		</>
	);
}
