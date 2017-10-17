import Constants from '../constants/Constants.jsx';
import MyFetch from '../utils/MyFetch.jsx'

export default {

    ip: Constants.Values.Mock ? '' : Constants.Values.ServerUrl,


    requestServer: function (type, device, _then) {
        MyFetch.fetch(this.ip + '/server?type=' + type + '&device=' + device, { method: 'GET' }, _then);
    },

    requestPorts: function (_then) {
        MyFetch.fetch(this.ip + '/ports', { method: 'GET' }, _then);
    },

    //查询Overview
    requestOverview: function (_then) {
        MyFetch.fetch(this.ip + '/dashboard', { method: 'GET' }, _then);
    },

    //更新Overview
    requestUpdateOverview: function (obj, _then) {
        var form = new URLSearchParams();
        form.set('content', JSON.stringify(obj));
        MyFetch.fetch(this.ip + '/dashboard', { method: 'PUT', body: form }, _then);
    },

    //更改地址
    requestUpdateDeviceAddress: function (deviceName, addr, dec1, dec2, _then) {
        var form = new URLSearchParams();
        form.set('addr', addr);
        form.set('d1', dec1);
        form.set('d2', dec2);

        MyFetch.fetch(this.ip + '/dashboard/' + deviceName, { method: 'PATCH', body: form }, _then);
    },

    //查询device detail
    requestDeviceDetail: function (deviceName, _then) {
        MyFetch.fetch(this.ip + '/detail/' + deviceName, { method: 'GET' }, _then);
    },

    //查询device的settings
    requestDeviceSettings: function (deviceName, type, source, _then) {
        MyFetch.fetch(this.ip + '/detail/' + deviceName + '/settings/' + type + '/' + source, { method: 'GET' }, _then);
    },

    //更新device的settings
    requestUpdateDeviceSettings: function (deviceName, type, obj, _then) {
        var form = new URLSearchParams();
        form.set('content', JSON.stringify(obj));

        MyFetch.fetch(this.ip + '/detail/' + deviceName + '/settings/' + type, { method: 'PUT', body: form }, _then);
    },

    //查询模板
    requestTemplate: function (type, _then) {
        MyFetch.fetch(this.ip + '/templates/' + type, { method: 'GET' }, _then);
    },

    //下载通道配置模板
    requestSaveTemplate: function (templateName, deviceName, ch, type, _then) {
        // let _body = 'deviceName=' + deviceName + '&ch=' + ch + '&type=' + type;
        var form = new URLSearchParams();
        form.set('device', deviceName);
        form.set('channel', ch);
        form.set('type', type);

        MyFetch.fetch(this.ip + '/templates/' + templateName, { method: 'POST', body: form }, _then);
    },

    //上传通道配置模板
    requestUpdateTemplate: function (deviceName, ch, _file, _then) {
        var form = new FormData();
        form.set('device', deviceName);
        form.set('channel', ch);
        form.set('file', _file);

        MyFetch.fetchUpdateFile(this.ip + '/templates', { method: 'POST', body: form }, _then);
    },

}