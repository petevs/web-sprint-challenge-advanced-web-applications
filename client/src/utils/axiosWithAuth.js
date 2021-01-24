import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorate.getItem("token")

    return axios.create({
        baseUrl: 'http://localhost:5000/api',
        headers: { Authorization: token }
    })
}