import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Login() {
	const [loggedIn, isLogged] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const olvidoContra = () => {
		alert("no te puedo ayudar, cagaste");
	};

	const checkUser = async (user) => {
		try {
			const response = await api.post("users/checkUser", user);

			if (response.ok) {
				const data = await response.json();
				if (data) {
					alert("Inicio de sesión exitoso");
					window.location.href =
						"http://192.168.1.20:8080/estaciones";
				} else {
					alert("Credenciales incorrectas");
				}
			} else {
				console.error("Error al iniciar sesión");
			}
		} catch (error) {
			console.error("Error de red:", error);
		}
	};

	const handleLogin = (e) => {
		e.preventDefault();
		let user = { username, password };
		checkUser(user);
		setUsername("");
		setPassword("");
	};

	return (
		<div className="flex flex-col justify-center items-center py-[0px] ">
			<form
				onSubmit={handleLogin}
				action="#"
				className="flex flex-col justify-center items-center w-[40%] h-[50%] rounded-2xl "
			>
				<h1 className="text-[36px] font-bold py-3 text-(--DTitle)">
					Iniciar sesión
				</h1>
				<div className="flex flex-col w-[60%]">
					<p className="text-left text-[16px] text-(--DText)">
						Nombre de usuario
					</p>
					<input
						className="p-3 my-2 text-white border-1 border-(--DBorder)"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Ingrese su usuario aqui!"
					/>
				</div>
				<div className="flex flex-col w-[60%]">
					<p className="text-left text-(--DText)">Contraseña</p>
					<input
						className="p-3 my-2 text-white border-1 border-(--DBorder)"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Ingrese su contraseña aqui!"
					/>
				</div>
				<button
					className="text-lg text-(--DText)"
					type="button"
					onClick={olvidoContra}
				>
					Olvidaste tu contraseña?
				</button>
				<div className="flex flex-row justify-between items-center w-[60%]">
					<div className="flex flex-row p-2">
						<Link
							to="/registro"
							className="text-[18px] text-(--DText)"
						>
							<p>¿No tienes una cuenta? </p>
							<p className="text-blue-500">Regístrate aquí </p>
						</Link>
					</div>
					<button
						className="text-black bg-(--DLgBtn) rounded-2xl px-8 h-12"
						type="submit"
					>
						Ingresar
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
