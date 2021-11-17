import api from "../api/axios";
import jwt_decode from "jwt-decode";
// Set all future requests to use the token.
const setToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
        api.interceptors.request.use(
            async (config) => {
                config.headers = {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    useCredentials: true,
                };
                return config;
            },
            (error) => {
                Promise.reject(error);
            }
        );
    }
};

// Get new Token by API CALL.
const tokenAPICALL = async (user, pass) => {
    const { data } = await api.post(
        `/login`,
        {
            name: "admin",
            email: user,
            password: pass,
        },
        {
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        }
    );
    console.log("token", data.token);
    //change here only token instead of ...
    // const jwt_Token_decoded = jwt_decode(data.data.token);

    //const expiryDate = jwt_Token_decoded.exp;
    localStorage.setItem("token", data.token);

    return data.token;
};

// Check the Token stored in Cookies.
const getToken = async (user, pass) => {
    const storedJwt = localStorage.getItem("token");
    console.log("storedjwt", storedJwt);
    if (storedJwt) {
        console.log("storedjwt2", storedJwt);
        return storedJwt;
    } else {
        await tokenAPICALL(user, pass);
        const newtoken = localStorage.getItem("token");
        console.log("newToken", newtoken);
        return newtoken;
    }
};

export default getToken;
