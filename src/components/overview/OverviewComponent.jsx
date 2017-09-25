import React from 'react';
import { observer } from 'mobx-react';
import { Scrollbars } from 'react-custom-scrollbars';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';

import OverviewService from '../../services/OverviewService.jsx'
import BreadcrumbComponent from '../main/BreadcrumbComponent.jsx'

import ItemComponent from './ItemComponent.jsx'
import DeviceDetailComponent from './DeviceDetailComponent.jsx'

class LayoutConfigModalContent extends React.Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <label className="col-xs-12" for="login1-username">I/O Port</label>
                    <select className="form-control" size="1">
                        <option value="1">COM3</option>
                        <option value="2">COM4</option>
                        <option value="3">COM5</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="col-xs-12" for="login1-username">Boad Rate</label>
                    <select className="form-control" size="1">
                        <option value="1">9600</option>
                        <option value="2">38400</option>
                    </select>
                </div>
            </div>
        )
    }
}

class OverviewTopComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: undefined };
    }

    componentDidMount() {
        console.log('OverviewComponent componentDidMount');
        OverviewService.requestOverview(function (json) {
            this.setState({ data: json });
            StateManager.appState.setMainLoading(false);
        }.bind(this));
    }

    onClickConfigLayoutButton(_layoutData) {
        console.log('_layoutData:' + _layoutData);
        StateManager.modalsState.setModal('Layout Config', <LayoutConfigModalContent />, function () {
            console.log('Layout Config ok');
        }.bind(this));
    }


    render() {
        let _data = this.state.data;
        // console.log(StateManager.uiState.OverviewHeadPadding);
        if (_data != null) {
            return (
                <div className="block" style={{ marginBottom: '0px' }}>
                    <div className="block-header bg-gray-lighter overview-head-padding">
                        <ul className="block-options-simple">
                            <button className="btn btn-square btn-sm btn-primary" onClick={this.onClickConfigLayoutButton.bind(this, _data)} data-toggle="modal" data-target="#modal-fromleft" style={{ margin: '0 2px' }}>
                                <i className="glyphicon glyphicon-cog"></i> {_data.com} | {_data.baud_rate}</button>
                        </ul>
                        <BreadcrumbComponent />
                    </div>

                    <div className="block-content main-content-padding">
                        <Scrollbars style={{ height: StateManager.uiState.OverviewTopContentHeight }}>
                            {
                                _data.rows.map(function (row, i) {
                                    let items = row.items;
                                    return (<div className="row animated bounceInDown main-content-row-padding-margin" >
                                        {
                                            items.map(function (item, num) {
                                                return (<ItemComponent data={item} />)
                                            })
                                        }
                                    </div>)
                                })

                            }
                        </Scrollbars>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

}

@observer
class OverviewComponent extends React.Component {

    render() {
        if (StateManager.appState.activeModuleLevel1Name == undefined) {
            return (<div className="col-xs-12 main-out-content-padding">
                <OverviewTopComponent />
            </div>)

        } else if (StateManager.appState.activeModuleLevel1Name == Constants.Values.Overview_Level_Detail) {
            return (<div className="col-xs-12 main-out-content-padding">
                <DeviceDetailComponent />
            </div>)
        }
    }

}

module.exports = OverviewComponent;