import React from 'react';

import EventProxy from '../../utils/EventProxy.jsx';

class EventDriveUI extends React.Component {
    constructor(props) {
        super(props);
        this.uiEventKey = undefined;
        this.uiDefaultValue = undefined;
    }

    componentWillMount() {
        this.state = { uiName: this.uiDefaultValue, data: undefined };
        if (this.uiEventKey) {
            EventProxy.on(this.uiEventKey, (_dispatch) => {
                //_dispatch = { uiName: _dispatch.uiName, data: _dispatch.data, exParams: _dispatch.exParams }
                this.setState(_dispatch);
            });
        }
    }

    componentWillUnmount() {
        if (this.uiEventKey) {
            EventProxy.off(this.uiEventKey);
        }
    }

}

module.exports = EventDriveUI;