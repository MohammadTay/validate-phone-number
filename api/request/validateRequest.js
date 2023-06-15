import axios from "axios"


const validateRequest = axios.create({
    baseURL: "https://api.apilayer.com/number_verification/",
    headers: { "apikey": "1BwiM2L9y2Qiurzk0CBik4SaHjq9UKqU" },
});


export default validateRequest
