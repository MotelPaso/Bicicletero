import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

function NavBar() {
	return (
		<nav className="flex flex-row justify-between items-center mb-6 px-10">
			<Link className="text-(--DTitle)" to="/inicio">
				<p className="text-[20px]">BiciSolar UCN</p>
			</Link>

			<div className="flex flex-row justify-around items-center py-0 px-5 text-(--DTitle)">
				<Link className="px-16 pt-0 pb-0" to="/mis-bicis">
					<p className="text-[20px] font-medium">Mis Bicicletas</p>
				</Link>
				<Link className="px-16 pt-0 pb-0" to="/estaciones">
					<p className="text-[20px] font-medium">
						Mapa de Estaciones
					</p>
				</Link>
				<Link className="px-16 pt-0 pb-0" to="/acerca">
					<p className="text-[20px] font-medium">Sobre Nosotros</p>
				</Link>
				<Link to="/login">
					<LoginButton />
				</Link>
			</div>
		</nav>
	);
}

export default NavBar;
