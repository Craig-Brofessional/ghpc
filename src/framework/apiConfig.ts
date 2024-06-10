import * as qs from "qs";
import { PathLike } from "fs";
import axios, { AxiosRequestConfig } from 'axios';

export const ApiConfig: AxiosRequestConfig = {
    withCredentials: false,
    timeout: 30000,
    baseURL: "http://localhost:5001",

};