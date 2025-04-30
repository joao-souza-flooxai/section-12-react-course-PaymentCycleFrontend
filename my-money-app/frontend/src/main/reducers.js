import { combineReducers } from 'redux';
import DashboardReducer from '../dashboard/dashboardReducer';
//Estado global da aplicação que será passada para os componentes pertinentes. 
const rootReducer = combineReducers({
    dashboard: DashboardReducer
});

export default rootReducer;