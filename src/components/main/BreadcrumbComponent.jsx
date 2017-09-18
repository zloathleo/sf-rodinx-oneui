import React from 'react';
import { observer } from 'mobx-react';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';

@observer
class BreadcrumbComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    onClickModuleLink() {
        StateManager.appState.setActiveModuleLevel1Name(undefined);
    }

    render() {
        if (StateManager.appState.activeModuleLevel1Name != undefined) {
            return (
                <ol className="breadcrumb push-10-t push-10-l">
                    <li><a className="link-effect" href="#" onClick={this.onClickModuleLink.bind(this)}>{StateManager.appState.activeMainModule}</a></li>
                    <li>{StateManager.appState.activeModuleLevel1Name}</li>
                </ol>
            )
        } else {
            return (
                <ol className="breadcrumb push-10-t push-10-l">
                    <li>{StateManager.appState.activeMainModule}</li>
                </ol>
            )
        }

    }

}


module.exports = BreadcrumbComponent;