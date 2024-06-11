import axios from 'axios';
import { ApiConfig } from './apiConfig';

const apiClient = axios.create(ApiConfig);

apiClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let res = error.response;
        if (res.status == 401) {
         window.location.href = "https://example.com/login";
        }
        console.error("Looks like there was a problem. Status Code: " + res.status);
        return Promise.reject(error);
    }
)

export default apiClient;
