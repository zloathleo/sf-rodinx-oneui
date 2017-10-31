import Constants from '../constants/Constants.jsx';
import MyFetch from '../utils/MyFetch.jsx'

export default {
    ip: Constants.Values.Mock ? '' : Constants.Values.ServerUrl,

    requestGetAlarms: function (device, timestamp, _then) {
        MyFetch.fetch(this.ip + '/alarms?' + 'device=' + device + '&timestamp=' + timestamp, { method: 'GET' }, _then);
    },
}