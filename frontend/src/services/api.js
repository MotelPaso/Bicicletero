import axios from "axios";

let API_URL = import.meta.env.VITE_API_LOCALPROD;

if (!API_URL) {
	console.error("URL no definida, usaremos la local...");
	API_URL = "http://127.0.0.1:8000";
}

const api = axios.create({
	baseURL: API_URL,
});

export default api;
