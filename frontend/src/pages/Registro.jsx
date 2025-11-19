import { useState } from "react";

export default function Registro() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const checkExists = async (user) => {
		try {
			const query = await fetch("http://127.0.0.1:8000/users/checkUser", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stingify(user),
			});
			if (query.ok) {
				const data = await query.json();
				return data
					? () => {
							alert("Registrado correctamente!");
					  }
					: () => {
							alert("Usuario ya existe en el sistema...");
					  };
			}
		} catch (e) {
			console.error(e);
		}
	};

	const createNewUser = (e) => {
		e.preventDefault();
		checkExists(username, password);
		setUsername("");
		setPassword("");
	};

	return (
		<>
			<div className="text-(--DText) flex flex-col justify-center">
				<h1 className="">Registro</h1>
				<form
					className="flex flex-col justify-center"
					onSubmit={createNewUser}
				>
					<input
						value={username}
						type="text"
						placeholder="Ingrese su nombre"
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					></input>
					<input
						value={password}
						type="password"
						placeholder="Ingrese su contraseña"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					></input>
					<button className="" type="submit">
						Registrarme
					</button>
				</form>
			</div>
		</>
	);
}
