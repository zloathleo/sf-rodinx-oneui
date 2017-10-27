import React from 'react';

import ModalComponent from './ModalComponent.jsx';
import AlertComponent from './AlertComponent.jsx'; 
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
                <LoadingComponent />
            </div>
        )
    }

}

module.exports = VirtualComponent;