import React from 'react';
import { observer } from 'mobx-react';

import StateManager from '../../states/StateManager.jsx';

@observer
class LoadingComponent extends React.Component {

    render() {
        if (StateManager.appState.isMainLoading) {
            return (
                <div className="row modal-backdrop fade in" style={{ height: '100%' }}>
                    <div className="col-xs-12 col-sm-12 text-center" style={{ top: '40%' }}>
                        <i className="fa fa-3x fa-asterisk fa-spin"></i>
                    </div>

                </div>
            )
        } else {
            return null;
        }

    }

}

module.exports = LoadingComponent;