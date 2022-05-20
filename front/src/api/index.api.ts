import {API URL} from :'~config';
import axios from 'axios';

private root

api =  (headers: any ={}): Promise<AxiosInstance> => {
    const token = localStorage.getItem('token'); 

    return axios.create({
        baseURL: `${API_URL}${this.route}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};