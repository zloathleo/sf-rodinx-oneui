import { observable, action } from 'mobx';

export default class UIState {

    //topbar + breadcrumb + foot + gap
    OverviewTopContentHeight = document.documentElement.clientWidth < 768 ? document.documentElement.clientHeight - (60 + 47 + 43 + 8) : document.documentElement.clientHeight - (61 + 51 + 61 + 10);

    @observable tempUnit = 'C';

    @action setTempUnit(unit) {
        this.tempUnit = unit;
    }

} 