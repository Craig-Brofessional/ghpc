import axios from 'axios';

const apiClient = axios.create({
    baseURL: "http://localhost:5001/",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

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
