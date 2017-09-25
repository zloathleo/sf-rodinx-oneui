import Constants from '../constants/Constants.jsx';
import MyFetch from '../utils/MyFetch.jsx'

export default {

    // ip: 'http://192.168.2.178:8080',
    ip: '',

    requestServer: function (_then) {
        MyFetch.fetch(this.ip + '/server', { method: 'get' }, _then);
    },

    requestOverview: function (_then) {
        MyFetch.fetch(this.ip + '/dashboard', { method: 'get' }, _then);
    },

    requestDeviceDetail: function (deviceName, _then) {
        MyFetch.fetch(this.ip + '/detail/' + deviceName, { method: 'get' }, _then);
    },

    requestDeviceUserSettings: function (deviceName, type, source, _then) {
        MyFetch.fetch(this.ip + '/detail/' + deviceName + '/settings/' + type + '/' + source, { method: 'get' }, _then);
    },

    requestSaveTemplate: function (templateName, deviceName, ch, type, _then) {
        // let _body = 'deviceName=' + deviceName + '&ch=' + ch + '&type=' + type;
        var form = new FormData();
        form.append('deviceName', deviceName);
        form.append('ch', ch);
        form.append('type', type);

        MyFetch.fetch(this.ip + '/templates/' + templateName, { method: 'post', body: form }, _then);
    },
}