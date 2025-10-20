import Button from "../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
	const [loggedIn, isLogged] = useState(false);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const olvidoContra = () => {
		// Todo: help with get new password
		alert("no te puedo ayudar, cagaste");
	};

	const checkUser = async (user) => {
		try {
			const response = await fetch(
				"http://127.0.0.1:8000/users/checkUser",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				}
			);

			if (response.ok) {
				const data = await response.json();
				if (data) {
					alert("Inicio de sesión exitoso");
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
		<div className="flex flex-col justify-center items-center py-[0%] pl-[50%]">
			<form
				onSubmit={handleLogin}
				action="#"
				className="flex flex-col justify-center items-center w-[90%] py-[40%] border-2 border-solid border-black"
			>
				<h1 className="text-5xl p-6">Inicio de sesión</h1>
				<input
					className="p-3 m-3 w-[70%] text-black bg-white"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Ingrese su usuario aqui!"
				/>
				<input
					className="p-3 m-3 w-[70%] text-black bg-white"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Ingrese su contraseña aqui!"
				/>
				<button
					className="text-lg"
					type="button"
					onClick={olvidoContra}
				>
					Olvidaste tu contraseña??
				</button>
				<div className="flex flex-row justify-around w-[100%]">
					<div className="flex flex-row justify-around p-2">
						<Link to="/registro" className="text-lg self-center">
							<p>¿No tienes una cuenta? </p>
							<p className="text-blue-500">Regístrate aquí </p>
						</Link>
					</div>
					<Button text="Ingresar" type="submit" color="green" />
				</div>
			</form>
		</div>
	);
}

export default Login;
