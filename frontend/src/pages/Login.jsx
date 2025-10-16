import Button from "../components/Button";
import { useState } from "react";
import TextBox from "../components/TextBox.jsx";

function Login() {
	const [loggedIn, isLogged] = useState(false);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const olvidoContra = () => {
		// Todo: help with get new password
		alert("no te puedo ayudar, cagaste");
	};

	const handleLogin = (e) => {
		// this func should call the backend and check if an user exists
		e.preventDefault();
		alert("Funciona!");
	};

	return (
		<div className="flex flex-col justify-center items-center py-[10%] px-[20%]">
			<form
				onSubmit={handleLogin}
				action="#"
				className="flex flex-col justify-center w-[90%] border-2 border-solid border-black"
			>
				<h1 className="text-5xl p-6">Inicio de sesión</h1>
				<TextBox
					name="username"
					id="user"
					type="text"
					placeholder="Ingrese su usuario aqui!"
				/>
				<TextBox
					name="password"
					id="pwd"
					type="password"
					placeholder="Ingrese su contraseña aqui!"
				/>
				<button
					className="text-lg"
					type="button"
					onClick={olvidoContra}
				>
					Olvidaste tu contraseña??
				</button>
				<div className="flex flex-row justify-around p-2">
					<Button
						text="Registrarse"
						type="button"
						color="lightblue"
					/>
					<Button text="Ingresar" type="submit" color="green" />
				</div>
			</form>
		</div>
	);
}

export default Login;
