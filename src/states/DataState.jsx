import { observable, action } from 'mobx';

import Constants from '../constants/Constants.jsx';

export default class DataState {
    userType = 0;//0:guest 1:admin 
 
    device = undefined;//device名称
    
    overviewJson = undefined;

    @observable detailJson = undefined;
    @observable dashboardRTJson = undefined;

    @action setDashboardRTJson(_json) { //当促发action的时候，改变对应的数据
        this.dashboardRTJson = _json;
    }

    @action setDetailJson(_json) { //当促发action的时候，改变对应的数据
        this.detailJson = _json;
    }

    resetDetailJson() {
        this.detailJson = undefined;
        this.device = undefined;
    }
} 