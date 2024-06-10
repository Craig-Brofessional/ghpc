// import * as http from 'http';
// import axios, { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios';

// export class Axios {
//     public interceptors?: {
//         /**
//          * The **Request** interceptor will be called right before the `http request`
//          * @summary
//          * This is a useful method especially if you need to send a token on each request
//          */
//         request: AxiosInterceptorManager<AxiosRequestConfig>;
//         /**
//          * The **Response** interceptor will be called right before the `http request` is received.
//          * @summary
//          * This is a useful method especially if you need to send a token on each request
//          */
//         response: AxiosInterceptorManager<AxiosResponse>;
//     };
//     constructor(config: AxiosRequestConfig) {
//         axios.defaults.timeout = config.timeout;
//         axios.defaults.httpAgent = new http.Agent({ timeout: config.timeout});
//         axios.defaults.httpsAgent = new http.Agent({ timeout: config.timeout});
//         return axios.create(config);
//     }
// }