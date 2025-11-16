import "../global.css";
import { Link } from "react-router-dom";

function Inicio() {
	return (
		<div className="flex pt-8">
			<div className="flex flex-col w-[60%]">
				<h1 className="text-(--DTitle) font-bold text-[64px] text-left">
					¡Únete al cambio!
				</h1>
				<h6 className="text-(--DText) font-normal text-[24px] text-left">
					Sé parte de los cientos de personas usan bicicletas para
					moverse por la ciudad.
				</h6>
			</div>
			<div className="flex justify-end items-center w-[30%]">
				<Link to="/registro">
					<button className="bg-black text-white rounded-lg w-52 h-24 text-[24px]">
						Registrarme
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Inicio;
