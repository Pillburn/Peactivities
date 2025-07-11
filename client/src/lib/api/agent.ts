import axios from "axios";
import { store } from "../stores/store";
import { toast } from "react-toastify";
import { router } from "../../app/router/Routes";

const sleep = (delay: number) => {
    return new Promise(resolve => {
        setTimeout(resolve,delay)
    })
}

export const agent = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000, //10 sec timeout in milliseconds
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

agent.interceptors.request.use(config => {
    store.uiStore.isBusy();
    return config;
})

agent.interceptors.response.use(
    async response => {
        await sleep(1000);
        store.uiStore.isIdle();
        return response;
    },
    async error => {
        await sleep(1000);
        store.uiStore.isIdle();

        const {status, data} = error.response

        switch (status) {
            case 400:
                if(data.errors){
                    const modalErrors = [];
                    for (const key in data.errors){
                        if (data.errors[key]){
                            modalErrors.push(data.errors[key]);
                        }
                        
                    }
                    throw modalErrors.flat();
                }else{
                    toast.error(data)
                    }
                break;
            case 401:
                toast.error('Unauthorised');
                break;
            case 404:
                router.navigate('/not-found');
                break;
            case 500:
                router.navigate('/server-error', {state:{error: data}})
                break;
            default:
                break;
        }
        return Promise.reject(error);
    }
    )

export default agent;