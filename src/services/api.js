import axios from "axios"

export const api = axios.create({
    baseURL: "https://corelab-api-8uwb.onrender.com"
})