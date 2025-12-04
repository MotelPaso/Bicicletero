import axios from "axios";

let API_URL = "http://179.8.199.30:8000";

const api = axios.create({
	baseURL: API_URL,
});

export default api;
