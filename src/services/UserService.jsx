import Constants from '../constants/Constants.jsx';
import MyFetch from '../utils/MyFetch.jsx'

export default {
    ip: Constants.Values.Mock ? '' : Constants.Values.ServerUrl,

    requestLogin: function (password, _then) {
        var form = new URLSearchParams();
        form.set('password', password);
        MyFetch.fetch(this.ip + '/password', { method: 'PATCH', body: form }, _then);
    },
}