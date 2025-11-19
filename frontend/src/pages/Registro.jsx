import { useState } from "react";

export default function Registro() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const checkExists = async (user) => {
		try {
			const query = await fetch("http://127.0.0.1:8000/users/addUser", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});
			if (query.ok) {
				const data = await query.json();

				if (data) {
					alert("Registrado correctamente");
				} else {
					alert("Usuario ya existe en el sistema...");
				}
			}
		} catch (e) {
			console.error(e);
		}
	};

	const createNewUser = (e) => {
		e.preventDefault();
		let user = { username, password };
		checkExists(user);
		setUsername("");
		setPassword("");
	};

	return (
		<>
			<div className="text-(--DText) flex flex-col justify-center items-center">
				<h1 className="text-[36px] font-bold pb-3 text-(--DTitle)">
					Registro
				</h1>
				<form
					className="flex flex-col justify-center w-[50%]"
					onSubmit={createNewUser}
				>
					<div className="py-5">
						<p className="text-left text-[20px] text-(--DText) pb-2">
							Nombre:
						</p>
						<input
							value={username}
							type="text"
							className="py-3 border-1 w-[100%]"
							placeholder="Ingrese su nombre"
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						></input>
					</div>
					<div className="py-5">
						<p className="text-left text-[20px] text-(--DText) pb-2">
							Ingrese su nueva contraseña:
						</p>
						<input
							value={password}
							type="password"
							className="py-3 border-1 w-[100%]"
							placeholder="Ingrese su contraseña"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						></input>
					</div>
					<div>
						<button className="bg-(--DLgBtn) w-[20%]" type="submit">
							Registrarme
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
