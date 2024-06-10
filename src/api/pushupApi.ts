import apiClient from "../framework/apiClient";

export class PushupApi {

    static getBalance = async (user_id: number) => {
        console.log('reached PushupApi.getBalance()');
        const request = apiClient.get(`ghpc/pushups/${user_id}/`);

        try {
            console.log('request: ', request);
            const response = await request;
            console.log('response: ', response);
            const balance = response.data.balance;
            console.log('balance: ', balance);
            return balance;
        }
        catch (ex) {
            console.log('getBalance ex: ', ex);
            return null;
        }
    }

    static incrementBalance = async (user_id: number, amount: number) => {
        console.log('reached PushupApi.incrementBalance()');
        const request = apiClient.post(`ghpc/pushups/${user_id}/`, { 'amount': amount});

        try {
            console.log('request: ', request);
            const response = await request;
            console.log('response: ', response);
            const balance = response.data.balance;
            console.log('balance: ', balance);
            return balance;
        }
        catch (ex) {
            console.log('incrementBalance ex: ', ex);
            return null;
        }
    }
}