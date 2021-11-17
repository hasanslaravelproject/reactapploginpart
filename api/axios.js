import axios from "axios";
import history from "../history";
const apiUrl = "http://127.0.0.1:8000/api"; //your api base url
const proxyurl = "https://thingproxy.freeboard.io/fetch/"; //proxy for local testing, remove this in production version
function getHeader() {
    const token = localStorage.getItem("token");
    console.log("setHeader", token);
    if (token) {
        return {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            useCredentials: true,
        };
    } else {
        return {
            "Content-Type": "application/json",
        };
    }
}
const api = axios.create({
    baseURL: apiUrl,
    headers: getHeader(),
});

export default api;
