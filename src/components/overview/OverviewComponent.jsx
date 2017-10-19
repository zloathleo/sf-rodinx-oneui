import React from 'react';
import { observer } from 'mobx-react';
import { Scrollbars } from 'react-custom-scrollbars';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';
import Utils from '../../utils/Utils.jsx'

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

//Add item
class AppendButtonPanel extends React.Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-2" style={{ padding: '3px' }} onClick={this.props.addCallback}>
                <a className="block block-link-hover3 text-center" href="#" style={{ marginBottom: '0px' }}>
                    <div className="block block-bordered" style={{ marginBottom: '0px' }}>
                        <div className="block-content" style={{ margin: '1px', textAlign: 'center', padding: '24px 0px' }}>
                            <i className="fa fa-plus-circle fa-2x" style={{ padding: '0px', color: '#5c90d2' }}></i>
                            <div className="font-w600 push-5-t">{this.props.title}</div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

class OverviewTopComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: undefined };
        this.updateCurrentOverview = this.updateCurrentOverview.bind(this);
        this.renderRows = this.renderRows.bind(this);
        this.renderColumns = this.renderColumns.bind(this);
        this.clickAddDeviceButton = this.clickAddDeviceButton.bind(this);
        this.clickAddRowButton = this.clickAddRowButton.bind(this);
    }

    componentDidMount() {
        OverviewService.requestOverview(function (json) {
            this.setState({ data: json });
            StateManager.dataState.overviewJson = json;
            StateManager.appState.setMainLoading(false);
        }.bind(this));
    }

    onClickConfigLayoutButton(_layoutData) {
        OverviewService.requestPorts(function (json) {
            StateManager.modalsState.setModal('Layout Config', <LayoutConfigModalContent ref={(_ref) => this.modalContent = _ref} ports={json} />, function () {

                const _inputPort = this.modalContent.inputPort.value;
                const _inputBoadRate = this.modalContent.inputBoadRate.value;
                console.log(_inputPort, _inputBoadRate);
                this.state.data.com = _inputPort;
                this.state.data.baud_rate = parseInt(_inputBoadRate);

                console.log(this.state.data);
                this.updateCurrentOverview();
            }.bind(this));
        }.bind(this));
    }

    clickAddDeviceButton(row) {
        let length = row.items.length;
        let newItem = {
            name: row.title + length,
            addr: -1,
            chs: [
                {
                    name: "CH1"
                },
                {
                    name: "CH2"
                }
            ]
        }
        row.items.push(newItem);
        this.updateCurrentOverview();
    }

    updateCurrentOverview() {
        StateManager.appState.setMainLoading(true);
        OverviewService.requestUpdateOverview(this.state.data, function (json) {
            OverviewService.requestOverview(function (json) {
                this.setState({ data: json });
                StateManager.appState.setMainLoading(false);
            }.bind(this));
        }.bind(this));
    }

    clickAddRowButton(rows) {
        let length = rows.length;
        if (length >= 22) {
            alert('too many rows:' + length);
        } else {
            let newRow = {
                index: length,
                title: Utils.getCharForNumber(length),
                items: []
            }
            rows.push(newRow);
            this.updateCurrentOverview();
        }
    }

    renderColumns(row) {
        let items = row.items;

        let existColumns = items.map(function (item, num) {
            return (<ItemComponent data={item} isLast={(num + 1) == items.length} />)
        });
        if (items.length < 6) {
            existColumns.push(<AppendButtonPanel title='Add Device' addCallback={this.clickAddDeviceButton.bind(this, row)} />);
        }
        return existColumns;
    }

    renderRows(rows) {
        let existRows = rows.map(function (row, i) {
            return (
                <div>
                    <div className="row main-overview-content-padding-margin">
                        {
                            this.renderColumns(row)
                        }
                    </div>
                    <hr className="main-overview-content-hr" />
                </div>
            )
        }.bind(this));
        existRows.push(<div className="row main-overview-content-padding-margin">
            <AppendButtonPanel title='Add Row' addCallback={this.clickAddRowButton.bind(this, rows)} />
        </div>);
        return existRows;
    }

    render() {
        let _data = this.state.data;
        if (_data != null) {
            return (
                <div>
                    <div className="block-header bg-gray-lighter overview-head-padding">
                        <ul className="block-options-simple push-10-r">
                            <button className="btn btn-square btn-sm btn-primary" onClick={this.onClickConfigLayoutButton.bind(this, _data)} data-toggle="modal" data-target="#modal-fromleft" style={{ margin: '0 2px' }}>
                                <i className="glyphicon glyphicon-cog"></i> {_data.com} | {_data.baud_rate}</button>
                        </ul>
                        <BreadcrumbComponent />
                    </div>

                    <div className="content main-content-padding animated bounceInDown">
                        <Scrollbars style={{ height: StateManager.uiState.OverviewTopContentHeight }}>
                            {
                                this.renderRows(_data.rows)
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
            return (
                <OverviewTopComponent />
            )
        } else if (StateManager.appState.activeModuleLevel1Name == Constants.Values.Overview_Level1_Detail) {
            return (
                <DeviceDetailComponent />
            )
        }
    }

}

module.exports = OverviewComponent;