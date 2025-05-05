import axios from 'axios';
const BASE_URL = 'http://localhost:3003/api';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return request;
}


export function create(values) {

    return dispatch=>{
        axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
            toastr.success('Success', 'Operação Realizada com sucesso.')
            resetForm('billingCycleForm');
            getList();
            selectTab('tabList');
            showTabs('tabList', 'tabCreate');
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        });
    }

 
    
}
