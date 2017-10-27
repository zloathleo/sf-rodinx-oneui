import React from 'react';

import { observer } from 'mobx-react';
 
 
class AlertComponent extends React.Component {

    render() {
        return null;
        // let _content = StateManager.modalsState.alertContent;
        // if (_content) {
        //     return (
        //         <div className="alert alert-success" className="animated bounceInDown" style={{
        //             position: 'fixed',
        //             width: '600px',
        //             bottom: '30px',
        //             left: '30px',
        //             zIndex: '1040',
        //         }}>
        //             {StateManager.modalsState.alertContent}
        //         </div>
        //     );
        // } else {
        //     return null;
        // } 
    }
}

module.exports = AlertComponent;