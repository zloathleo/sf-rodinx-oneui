import { observable, action } from 'mobx';

import Constants from '../constants/Constants.jsx';

export default class AppState {
    uiName = Constants.Values.Module_UI_Main; //登录和主页面 

    OverviewTopContentHeight = document.documentElement.clientHeight - (60 + 60 + 50);

    //当前显示模块
    @observable isMainLoading = true;
    //主页面当前显示模块
    @observable activeMainModule = Constants.Values.Main_Module_Overview;
    //层次1
    @observable activeModuleLevel1Name = undefined;
    // //层次2
    // @observable activeModuleLevel2Name = undefined;

    @action setMainLoading(loading) {
        this.isMainLoading = loading;
    }

    @action setActiveModuleLevel1Name(_level1) {
        this.activeModuleLevel1Name = _level1;
    }

} 