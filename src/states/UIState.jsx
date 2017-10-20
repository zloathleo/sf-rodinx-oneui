import { observable, action } from 'mobx';

export default class UIState {

    //topbar + breadcrumb + foot + gap
    OverviewTopContentHeight = document.documentElement.clientWidth < 760 ? document.documentElement.clientHeight - (60 + 42 + 43 + 8) : document.documentElement.clientHeight - (60 + 46 + 11 + 47);

    @observable tempUnit = 'C';

    @action setTempUnit(unit) {
        this.tempUnit = unit;
    }

} 