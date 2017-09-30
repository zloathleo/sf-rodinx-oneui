import { observable, action } from 'mobx';

import Constants from '../constants/Constants.jsx';

export default class AppState { 
  
    //当前显示模块
    @observable isMainLoading = true;
    //主页面当前显示模块
    @observable activeMainModule = Constants.Values.Main_Module_Overview;
    //层次1
    @observable activeModuleLevel1Name = undefined;
    //层次2
    @observable activeModuleLevel2Name = undefined;

    @action setActiveMainModule(_module) {
        this.activeMainModule = _module;
    }

    @action setMainLoading(loading) {
        this.isMainLoading = loading;
    }

    @action resetModuleRoot() {
        this.activeMainModule = Constants.Values.Main_Module_Overview;
        this.activeModuleLevel1Name = undefined;
        this.activeModuleLevel2Name = undefined;
    }

    @action setActiveModuleLevel1Name(_level1) {
        this.activeModuleLevel1Name = _level1;
    }

    @action setActiveModuleLevel2Name(_level2) {
        this.activeModuleLevel2Name = _level2;
    }

} 