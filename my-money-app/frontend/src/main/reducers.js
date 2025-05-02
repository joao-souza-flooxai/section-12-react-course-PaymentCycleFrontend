import { combineReducers } from 'redux';
import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer';
//Estado global da aplicação que será passada para os componentes pertinentes. 
const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
});

export default rootReducer;