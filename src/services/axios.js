import axios from "axios";
const Api = axios.create({
    baseURL: process.env.REACT_APP_BE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});
export default Api