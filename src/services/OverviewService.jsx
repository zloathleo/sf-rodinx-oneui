import Constants from '../constants/Constants.jsx';
import MyFetch from '../utils/MyFetch.jsx'

export default {

    // ip: 'http://localhost:8080',
    ip: Constants.Values.Mock ? '' : 'http://192.168.2.89:8080',
    // ip: '',

    requestServer: function (_then) {
        MyFetch.fetch(this.ip + '/server', { method: 'GET' }, _then);
    },

    requestPorts: function (_then) {
        MyFetch.fetch(this.ip + '/ports', { method: 'GET' }, _then);
    },

    requestOverview: function (_then) {
        MyFetch.fetch(this.ip + '/dashboard', { method: 'GET' }, _then);
    },

    //更改地址
    requestUpdateDeviceAddress: function (deviceName, addr, dec1, dec2, _then) {
        // let _body = 'deviceName=' + deviceName + '&ch=' + ch + '&type=' + type;
        var form = new FormData();
        form.append('addr', addr);
        form.append('d1', dec1);
        form.append('d2', dec2);

        MyFetch.fetch(this.ip + '/dashboard/' + deviceName, { method: 'PATCH', body: form }, _then);
    },

    requestDeviceDetail: function (deviceName, _then) {
        MyFetch.fetch(this.ip + '/detail/' + deviceName, { method: 'GET' }, _then);
    },

    requestDeviceSettings: function (deviceName, type, source, _then) {
        MyFetch.fetch(this.ip + '/detail/' + deviceName + '/settings/' + type + '/' + source, { method: 'GET' }, _then);
    },

    requestUpdateDeviceSettings: function (deviceName, type, obj, _then) {
        var form = new FormData();
        form.append('content', JSON.stringify(obj));

        MyFetch.fetch(this.ip + '/detail/' + deviceName + '/settings/' + type, { method: 'PUT', body: form }, _then);
    },

    //查询模板
    requestTemplate: function (type, _then) {
        MyFetch.fetch(this.ip + '/templates/' + type, { method: 'GET' }, _then);
    },

    //保存通道配置模板
    requestSaveTemplate: function (templateName, deviceName, ch, type, _then) {
        // let _body = 'deviceName=' + deviceName + '&ch=' + ch + '&type=' + type;
        var form = new FormData();
        form.append('deviceName', deviceName);
        form.append('ch', ch);
        form.append('type', type);

        MyFetch.fetch(this.ip + '/templates/' + templateName, { method: 'POST', body: form }, _then);
    },

    //保存通道配置模板
    requestUseTemplate: function (templateName, deviceName, ch, type, _then) {
        var form = new FormData();
        form.append('deviceName', deviceName);
        form.append('ch', ch);
        form.append('type', type);

        MyFetch.fetch(this.ip + '/templates/' + templateName, { method: 'PUT', body: form }, _then);
    },

}