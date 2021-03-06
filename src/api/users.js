import axios from 'axios';

const URL = 'https://home-work-serv.herokuapp.com/api/users';

axios.interceptors.request.use(req => {
    req.headers.Authorization = `${sessionStorage.getItem("token")}`;
    return req;
});

export const getAllUsers = async () => {
    const { data } = await axios.get(`${URL}`)
    return data
}

export const signupUser = async (user) => {
    const { data } = await axios.post(`${URL}/signup`, user)
    return data
}
export const signinUser = async (email, password) => {
    const { data } = await axios.post(`${URL}/login`, { email, password })
    return data
}
export const updateUser = async (user) => {
    const { data } = await axios.put(`${URL}/update`, { user })
    return data
}

export const signout = async (token) => {
    const { data } = await axios.get(`${URL}/signout`, token)
    return data
}