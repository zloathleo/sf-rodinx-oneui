import Constants from '../constants/Constants.jsx';
import MyFetch from '../utils/MyFetch.jsx'

export default {
    ip: Constants.Values.Mock ? '' : 'http://192.168.2.89:8080',

    requestLogin: function (userName, password, _then) {
        var form = new URLSearchParams();
        form.set('password', password);
        MyFetch.fetch(this.ip + '/users/' + userName, { method: 'PATCH', body: form }, _then);
    },
}