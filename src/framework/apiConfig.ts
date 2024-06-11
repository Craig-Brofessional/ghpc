import * as qs from "qs";
import { PathLike } from "fs";
import axios, { AxiosRequestConfig } from 'axios';

export const ApiConfig: AxiosRequestConfig = {
    withCredentials: false,
    timeout: 30000,
    // baseURL: "http://localhost:5001",
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
};