import axios from "axios";
const Api = axios.create({
    baseURL: process.env.REACT_APP_BE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH'
    },
    timeout: 10000,
});
export default Api