import { Link } from "react-router-dom";
import Button from "./Button";

function NavBar() {
	return (
		<nav className="flex flex-row justify-between items-center mb-6">
			<Link className="" to="/inicio">
				Grupo 3
			</Link>

			<div className="flex flex-row justify-around py-0 px-5">
				<Link className="px-8 pt-0 pb-0" to="/inicio">
					Inicio
				</Link>
				<Link className="px-8 pt-0 pb-0" to="/mis-bicis">
					Mis Bicicletas
				</Link>
				<Link className="px-8 pt-0 pb-0" to="/estaciones">
					Mapa de Estaciones
				</Link>
				<Link className="px-8 pt-0 pb-0" to="/acerca">
					Sobre Nosotros
				</Link>
			</div>
			<div className="flex justify-center">
				<Link to="/login">
					<Button type="button" text="Ingresar" color="green" />
				</Link>
			</div>
		</nav>
	);
}

export default NavBar;
