import React from 'react';

import Constants from '../../constants/Constants.jsx';
import EventProxy from '../../utils/EventProxy.jsx';

class RefreshUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: undefined, refreshData: undefined };

        this.refreshInterval = undefined;
        this.doLoopRequest = this.doLoopRequest.bind(this);
        this.formatRefreshData = this.formatRefreshData.bind(this);
    }

    componentWillMount() {
        this.doLoopRequest();
    }

    componentWillUnmount() {
        clearTimeout(this.refreshInterval);
    }

    getRefreshDataFunc(_callback) {

    }

    formatRefreshData(_data) {
        return _data;
    }

    doLoopRequest() {
        let _callback = function (_json) {
            if(_json){
                this.setState({ refreshData: this.formatRefreshData(_json) });
            } 
            this.doLoopRequest();
        }.bind(this);

        this.refreshInterval = setTimeout(this.getRefreshDataFunc.bind(this, _callback), 1000 * 1);
    }

}

module.exports = RefreshUI;