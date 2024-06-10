import apiClient from "../framework/apiClient";

export class PushupApi {
    // static getPushupsBalance = () => {
    //     console.log('reached PushupApi.getPushupsBalance()');
    //     return 40;
    // }

    static getPushupsBalance = async () => {
        console.log('reached PushupApi.getPushupsBalance()');
        const request = apiClient.get('balance/');

        try {
            console.log('request: ', request);
            const response = await request;
            console.log('response: ', response);
            const balance = response.data;
            console.log('balance: ', balance);
            return balance
        }
        catch (ex) {
            console.log('getPushupsBalance ex: ', ex);
            return null;
        }
    }
}