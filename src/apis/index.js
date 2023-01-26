import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:3030"
    baseURL: "https://flores-del-tambo-to-do-list-bd.vercel.app/"
});