import { http } from "./Http";


export const registerUser = (user) => {
    return http.post('/auth/register', user)
}

export const logIn = (user) => {
    return http.post('/auth/login', user)
}

export const getPosts = () => {
    return http.get('/posts')
}