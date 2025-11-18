import "../global.css";
import { Link } from "react-router-dom";

function Inicio() {
	return (
		<div className="relative w-full">
			<img
				src="/fotoBicis.jpg"
				className="w-full h-[620px] object-cover"
			/>

			<div className="absolute top-0 left-0 w-full h-full flex flex-row justify-start pt-16 px-8">
				<div className="text-left w-[80%]">
					<h1 className="font-bold text-[64px] text-(--DBG) drop-shadow-xl">
						¡Únete al cambio!
					</h1>
					<h6 className="font-semibold text-[24px] text-(--DBG) drop-shadow">
						Sé parte de los cientos de personas usan bicicletas para
						moverse por la ciudad.
					</h6>
				</div>

				<div className="mt-8">
					<Link to="/registro">
						<button className="bg-black text-white rounded-lg w-52 h-20 text-[24px]">
							Registrarme
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Inicio;
