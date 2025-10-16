import "./App.css";
import Inicio from "./pages/Inicio";
import MisBicis from "./pages/MisBicis";
import Estaciones from "./pages/Estaciones";
import About from "./pages/About";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
	const location = useLocation();
	const esLogin = location.pathname === "/login";

	return (
		<>
			{!esLogin && <NavBar />}
			<main className="main-content">
				<Routes>
					<Route path="/inicio" element={<Inicio />} />
					<Route path="/mis-bicis" element={<MisBicis />} />
					<Route path="/estaciones" element={<Estaciones />} />
					<Route path="/acerca" element={<About />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
