import Constants from '../constants/Constants.jsx';
import MyFetch from '../utils/MyFetch.jsx'

export default {

    requestServer: function (_then) {
        MyFetch.fetch('/server', 'get', _then);
    },

    requestOverview: function (_then) {
        MyFetch.fetch('/dashboard', 'get', _then);
    },

    requestDeviceDetail: function (deviceName, _then) {
        MyFetch.fetch('/detail/' + deviceName, 'get', _then);
    },
}