import { observable, action } from 'mobx';

export default class ModalsState {
    @observable title = undefined;
    @observable content = undefined; //内容
    okFunc = undefined;

    @action setModal(_title, _content, _okFunc) { //当促发action的时候，改变对应的数据
        this.title = _title;
        this.content = _content;
        this.okFunc = _okFunc;
    }

    @action resetModal() { //当促发action的时候，改变对应的数据
        this.title = undefined;
        this.content = undefined;
        this.okFunc = undefined;
    }


    @observable alertContent = ''; //内容
    @observable alertType = 0; //类型
    @action setAlert(_alertType, _alertContent) { //当促发action的时候，改变对应的数据
        this.alertType = _alertType;
        this.alertContent = _alertContent; 
    }

} 