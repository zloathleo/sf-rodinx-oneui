import React from 'react';

import ModalComponent from './ModalComponent.jsx';
import AlertComponent from './AlertComponent.jsx';
import RealtimeComponent from './RealtimeComponent.jsx';
import LoadingComponent from './LoadingComponent.jsx';

class VirtualComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                <ModalComponent />
                <AlertComponent />
                <RealtimeComponent />
                <LoadingComponent />
            </div>
        )
    }

}

module.exports = VirtualComponent;