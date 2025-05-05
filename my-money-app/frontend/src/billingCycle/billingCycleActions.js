import axios from 'axios';
const BASE_URL = 'http://localhost:3003/api';

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return request;
}

export function create(values) {
    axios.post(`${BASE_URL}/billingCycles`, values);
    return {
        type: 'TEMP'
    };
}