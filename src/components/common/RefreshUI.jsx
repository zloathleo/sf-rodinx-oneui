import React from 'react';

import Constants from '../../constants/Constants.jsx';
import EventProxy from '../../utils/EventProxy.jsx';

class RefreshUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: undefined, refreshData: undefined };

        this.timeOut = 1000 * 1;
        this.refreshInterval = undefined;
        this.doLoopRequest = this.doLoopRequest.bind(this);
        this.doLoopCallback = this.doLoopCallback.bind(this);
        this.formatRefreshData = this.formatRefreshData.bind(this);
    }

    componentWillMount() {
        this.getRefreshDataFunc.bind(this, function (_json) {
            if (_json) {
                this.setState({ refreshData: this.formatRefreshData(_json) });
            }
        }.bind(this))();
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

    doLoopCallback(_json) {
        if (_json) {
            this.setState({ refreshData: this.formatRefreshData(_json) });
        }
        this.doLoopRequest();
    }

    doLoopRequest() {
        this.refreshInterval = setTimeout(this.getRefreshDataFunc.bind(this, function (_json) {
            this.doLoopCallback(_json);
        }.bind(this)), this.timeOut);
    }

}

module.exports = RefreshUI;