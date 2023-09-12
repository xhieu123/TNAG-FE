import axios from "axios";
const customAxios = axios.create({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    baseURL:'http://localhost:8080'

})
export default customAxios;