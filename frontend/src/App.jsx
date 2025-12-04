import "./App.css";
import Inicio from "./pages/Inicio";
import MisBicis from "./pages/MisBicis";
import Estaciones from "./pages/Estaciones";
import About from "./pages/About";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Registro from "./pages/Registro";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<NavBar />
			<main className="main-content mx-10">
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/mis-bicis" element={<MisBicis />} />
					<Route path="/estaciones" element={<Estaciones />} />
					<Route path="/acerca" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/registro" element={<Registro />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
