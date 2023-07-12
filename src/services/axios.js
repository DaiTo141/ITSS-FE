import axios from "axios";
const Api = axios.create({
    baseURL: process.env.REACT_APP_BE_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin' : true,
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH'
    },
});
export default Api