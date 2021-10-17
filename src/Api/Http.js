import axios from "axios";

export const http = axios.create({
    baseURL: "https://book-api.hypetech.xyz/v1",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": "B1tD3V",
    }
})

const token = localStorage.getItem('token');


export const httpAuth = axios.create({
    baseURL: "https://book-api.hypetech.xyz/v1",
    headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
        "x-api-key": "B1tD3V",
    }
})