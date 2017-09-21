import Constants from '../constants/Constants.jsx';
import MyFetch from '../utils/MyFetch.jsx'

export default {

    // ip: 'http://192.168.2.178:8080',
    ip: '',

    requestServer: function (_then) {
        MyFetch.fetch(this.ip + '/server', 'get', _then);
    },

    requestOverview: function (_then) {
        MyFetch.fetch(this.ip + '/dashboard', 'get', _then);
    },

    requestDeviceDetail: function (deviceName, _then) {
        MyFetch.fetch(this.ip + '/detail/' + deviceName, 'get', _then);
    },

    requestDeviceUserSettings: function (deviceName, type, source, _then) {
        MyFetch.fetch(this.ip + '/detail/' + deviceName + '/settings/' + type + '/' + source, 'get', _then);
    },
}