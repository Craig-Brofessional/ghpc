import { AxiosRequestConfig, AxiosResponse, Axios } from 'axios';

import { ApiConfig } from "./apiConfig";

export class ApiBase extends Axios {
    constructor(config: AxiosRequestConfig) {
        // NEVER FORGET THE SUPER
        super(config);        
        
        //this middleware is called right before the http request is made.
        this.interceptors.request.use((request) => {
            return request;
        });

        // this middleware is called right before the response is returned to the requester
        this.interceptors.response.use((response: AxiosResponse) => {
            return response;
        }, (error) => {
            console.log('error: ', error);
            return Promise.reject(error);
        })
    }
}