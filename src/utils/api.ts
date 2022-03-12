import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        code: process.env.REACT_APP_API_KEY
    }
})





