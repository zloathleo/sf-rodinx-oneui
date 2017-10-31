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
        this._doLoopCallback = this._doLoopCallback.bind(this);
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

    _doLoopCallback(_json) {
        if (_json) {
            this.setState({ refreshData: this.formatRefreshData(_json) });
        }
        this.doLoopRequest();
    }

    doLoopRequest() {
        this.refreshInterval = setTimeout(this.getRefreshDataFunc.bind(this, function (_json) {
            if (_json) {
                this.setState({ refreshData: this.formatRefreshData(_json) });
            }
            this.doLoopRequest();
        }.bind(this)), this.timeOut);
    }

}

module.exports = RefreshUI;