import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://alinka2906-1b80b-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default axiosApi;