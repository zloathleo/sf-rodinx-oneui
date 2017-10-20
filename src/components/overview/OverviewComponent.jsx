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
        let _overviewData = this.props.overviewData;
        return (
            <div>
                <div className="form-group">
                    <label className="col-xs-12">I/O Port</label>
                    <select ref={(_ref) => this.inputPort = _ref} className="form-control" defaultValue={_overviewData.com} size="1">
                        {
                            _ports.map(function (item, i) {
                                return <option value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label className="col-xs-12">Boad Rate</label>
                    <select className="form-control" ref={(_ref) => this.inputBoadRate = _ref} defaultValue={_overviewData.baud_rate} size="1">
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

class RemoveButtonPanel extends React.Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-2" style={{ padding: '3px' }} onClick={this.props.addCallback}>
                <a className="block block-link-hover3 text-center" href="#" style={{ marginBottom: '0px' }}>
                    <div className="block block-bordered" style={{ marginBottom: '0px' }}>
                        <div className="block-content" style={{ margin: '1px', textAlign: 'center', padding: '24px 0px' }}>
                            <i className="fa fa-times-circle fa-2x" style={{ padding: '0px', color: '#5c90d2' }}></i>
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
        this.clickRemoveItemButton = this.clickRemoveItemButton.bind(this);
        this.clickRemoveLastRowButton = this.clickRemoveLastRowButton.bind(this);
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
            StateManager.modalsState.setModal('Layout Config', <LayoutConfigModalContent ref={(_ref) => this.modalContent = _ref} ports={json} overviewData={this.state.data} />, function () {

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
                StateManager.dataState.overviewJson = json;
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

    clickRemoveItemButton(_item) {
        StateManager.modalsState.setModal('Confirm', <div>Delete Device {_item.name} ?</div>, function () {
            let _rowIndex = Utils.getNumberForChar(_item.name);
            let _columnIndex = _item.name.substring(1, 2);
            let _items = StateManager.dataState.overviewJson.rows[_rowIndex].items;
            _items.pop();
            this.updateCurrentOverview();
        }.bind(this));
    }

    clickRemoveLastRowButton(rows) {
        rows.pop();
        this.updateCurrentOverview();

    }

    renderColumns(row) {
        let items = row.items;

        let existColumns = items.map(function (item, num) {
            return (<ItemComponent data={item} isLast={(num + 1) == items.length} parent={this} />)
        }.bind(this));
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
            <RemoveButtonPanel title='Remove Last Device' addCallback={this.clickRemoveLastRowButton.bind(this, rows)} />
        </div>);
        // existRows.push();
        return existRows;
    }

    render() {
        let _data = this.state.data;
        if (_data != null) {
            return (
                <div className="main-content-padding animated bounceInDown">
                    <Scrollbars style={{ height: StateManager.uiState.OverviewTopContentHeight }}>
                        {
                            this.renderRows(_data.rows)
                        }
                    </Scrollbars>
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