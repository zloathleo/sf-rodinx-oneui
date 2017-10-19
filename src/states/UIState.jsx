import { observable, action } from 'mobx';

export default class UIState {

    //topbar + breadcrumb + foot + gap
    OverviewTopContentHeight = document.documentElement.clientWidth < 760 ? document.documentElement.clientHeight - (60 + 42 + 43 + 8) : document.documentElement.clientHeight - (61 + 42 + 47 + 10);

    @observable tempUnit = 'C';

    @action setTempUnit(unit) {
        this.tempUnit = unit;
    }

} 