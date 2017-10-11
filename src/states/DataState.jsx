import { observable, action } from 'mobx';

import Constants from '../constants/Constants.jsx';

export default class DataState {
    userType = 0;//0:guest 1:admin 
    detailJson = undefined;

    @observable dashboardRTJson = undefined;

    @action setDashboardRTJson(_json) { //当促发action的时候，改变对应的数据
        this.dashboardRTJson = _json;
    }
} 