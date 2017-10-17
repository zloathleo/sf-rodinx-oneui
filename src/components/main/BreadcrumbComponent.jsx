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
        StateManager.appState.resetModuleRoot();
    }

    onClickLevel1Link() {
        StateManager.appState.setActiveModuleLevel2Name(undefined);
    }

    render() {
        if (StateManager.appState.activeModuleLevel1Name != undefined) {
            if (StateManager.appState.activeModuleLevel2Name != undefined) {
                return (
                    <ol className="breadcrumb push-5-t push-10-l">
                        <li><a className="link-effect" href="#" onClick={this.onClickModuleLink.bind(this)}>{StateManager.appState.activeMainModule}</a></li>
                        <li><a className="link-effect" href="#" onClick={this.onClickLevel1Link.bind(this)}>{StateManager.dataState.detailJson.name}</a></li>
                        <li>{StateManager.appState.activeModuleLevel2Name}</li>
                    </ol>
                )
            } else {
                return (
                    <ol className="breadcrumb push-5-t push-10-l">
                        <li><a className="link-effect" href="#" onClick={this.onClickModuleLink.bind(this)}>{StateManager.appState.activeMainModule}</a></li>
                        <li>{StateManager.dataState.detailJson.name}</li>
                    </ol>
                )
            }
        } else {
            return (
                <ol className="breadcrumb push-5-t push-10-l">
                    <li>{StateManager.appState.activeMainModule}</li>
                </ol>
            )
        }
    }

}


module.exports = BreadcrumbComponent;