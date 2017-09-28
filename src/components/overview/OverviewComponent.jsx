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
        let _ports = this.props.ports.rows;
        return (
            <div>
                <div className="form-group">
                    <label className="col-xs-12">I/O Port</label>
                    <select ref={(_ref) => this.inputPort = _ref} className="form-control" size="1">
                        {
                            _ports.map(function (item, i) {
                                return <option value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label className="col-xs-12">Boad Rate</label>
                    <select ref={(_ref) => this.inputBoadRate = _ref} className="form-control" size="1">
                        <option value={9600} >9600</option>
                        <option value={38400} >38400</option>
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
        OverviewService.requestOverview(function (json) {
            this.setState({ data: json });
            StateManager.appState.setMainLoading(false);
        }.bind(this));
    }

    onClickConfigLayoutButton(_layoutData) {
        OverviewService.requestPorts(function (json) {
            StateManager.modalsState.setModal('Layout Config', <LayoutConfigModalContent ref={(_ref) => this.modalContent = _ref} ports={json} />, function () {

                const _inputPort = this.modalContent.inputPort.value;
                const _inputBoadRate = this.modalContent.inputBoadRate.value;
                console.log(_inputPort, _inputBoadRate);

            }.bind(this));
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

                    <div className="block-content main-content-padding animated bounceInDown ">
                        <Scrollbars style={{ height: StateManager.uiState.OverviewTopContentHeight }}>
                            {
                                _data.rows.map(function (row, i) {
                                    let items = row.items;
                                    return (<div className="row main-overview-content-padding-margin bs-callout bs-callout-primary">
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

        } else if (StateManager.appState.activeModuleLevel1Name == Constants.Values.Overview_Level1_Detail) {
            return (<div className="col-xs-12 main-out-content-padding">
                <DeviceDetailComponent />
            </div>)
        }
    }

}

module.exports = OverviewComponent;