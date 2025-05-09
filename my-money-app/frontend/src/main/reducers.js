import { combineReducers } from 'redux';
import {reducer as formReducer} from "redux-form";
import {reducer as toastrReducer} from "react-redux-toastr";

import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer';
import BillingCycleReducer from "../billingCycle/billingCycleReducer"


//Estado global da aplicação que será passada para os componentes pertinentes. 
const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
});

export default rootReducer;