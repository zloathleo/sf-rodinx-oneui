import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Constants from '../../constants/Constants.jsx';
import Utils from '../../utils/Utils.jsx';
import EventProxy from '../../utils/EventProxy.jsx';
import AppState from '../../states/AppState.jsx';

import OverviewService from '../../services/OverviewService.jsx';
import RefreshUI from '../common/RefreshUI.jsx';
import ItemComponent from './ItemComponent.jsx';
import DeviceDetailComponent from './DeviceDetailComponent.jsx';

//Add item
class AppendButtonPanel extends React.Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-2 main-overview-item-padding" onClick={this.props.addCallback}>
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
            <div className="col-xs-6 col-sm-2 main-overview-item-padding" onClick={this.props.addCallback} data-toggle="modal" data-target="#modal-fromleft" >
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

class OverviewComponent extends RefreshUI {
    constructor(props) {
        super(props);

        this.updateCurrentOverview = this.updateCurrentOverview.bind(this);
        this.refreshAllOverview = this.refreshAllOverview.bind(this);
        
        this.renderRows = this.renderRows.bind(this);
        this.renderColumns = this.renderColumns.bind(this);

        this.clickAddDeviceButton = this.clickAddDeviceButton.bind(this);
        this.clickAddRowButton = this.clickAddRowButton.bind(this);
        this.clickRemoveItemButton = this.clickRemoveItemButton.bind(this);
        this.clickRemoveLastRowButton = this.clickRemoveLastRowButton.bind(this);
    }

    componentWillMount() {
        super.componentWillMount();
        EventProxy.on(Constants.Event.Dashboard_Save_Key, (_value) => {
            if (_value == 'com') {
                //提交更新
                this.updateCurrentOverview();
            } else if (_value == 'addr') {
                this.refreshAllOverview();
            }
        });
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        EventProxy.off(Constants.Event.Dashboard_Save_Key);
    }

    componentDidMount() {
        console.log('overview request data');
        this.refreshAllOverview();
    }

    refreshAllOverview() {
        OverviewService.requestOverview(function (json) {
            this.setState({ data: json });
            EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Invisible });
            //刷新其他UI
            EventProxy.trigger(Constants.Event.MainUI_Key, { uiName: Constants.Event.MainUI_Value_Overview, data: json });
        }.bind(this));
    }

    formatRefreshData(_data) {
        return _data;
    }

    getRefreshDataFunc(_callback) {
        let _overviewData = this.state.data;
        if (!_overviewData || _overviewData.rows.length == 0) {
            _callback(null);
        } else {
            OverviewService.requestServer(1, undefined, _callback);
        }
    }

    updateCurrentOverview() {
        EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Visible });
        OverviewService.requestUpdateOverview(this.state.data, function (json) {
            OverviewService.requestOverview(function (json) {

                this.setState({ data: json });
                EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Invisible });
                //刷新其他UI
                EventProxy.trigger(Constants.Event.MainUI_Key, { data: json });
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
        let _modalContent = <div>Delete Device {_item.name} ?</div>;
        let _okFunc = function () {
            console.log('ok');
            let _rowIndex = Utils.getNumberForChar(_item.name);
            let _columnIndex = _item.name.substring(1, 2);

            let _overviewData = this.state.data;
            let _items = _overviewData.rows[_rowIndex].items;
            _items.pop();
            this.updateCurrentOverview();
        }.bind(this);

        let _dispatch = {
            uiName: 'Confirm',
            data: { title: 'Confirm' },
            exParams: {
                content: _modalContent,
                okFunc: _okFunc
            }
        }
        EventProxy.trigger(Constants.Event.ModalUI_Key, _dispatch);
    }

    clickRemoveLastRowButton(rows) {
        let length = rows.length;
        let _lastRowName = Utils.getCharForNumber(length - 1);

        let _modalContent = <div>Remove Row {_lastRowName} ?</div>;
        let _okFunc = function () {
            rows.pop();
            this.updateCurrentOverview();
        }.bind(this);

        let _dispatch = {
            uiName: 'Confirm',
            data: { title: 'Confirm' },
            exParams: {
                content: _modalContent,
                okFunc: _okFunc
            }
        }
        EventProxy.trigger(Constants.Event.ModalUI_Key, _dispatch);
    }

    ///render
    renderColumns(row) {
        let items = row.items;
        let _refreshData = this.state.refreshData;

        let existColumns = items.map(function (item, num) {
            return (<ItemComponent data={item} refreshData={_refreshData} isLast={(num + 1) == items.length} parent={this} />)
        }.bind(this));
        if (AppState.User_Name == 'admin') {
            if (items.length < 6) {
                existColumns.push(<AppendButtonPanel title='Add Device' addCallback={this.clickAddDeviceButton.bind(this, row)} />);
            }
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
        if (AppState.User_Name == 'admin') {
            if (rows.length == 0) {
                existRows.push(<div className="row main-overview-content-padding-margin">
                    <AppendButtonPanel title='Add Row' addCallback={this.clickAddRowButton.bind(this, rows)} />
                </div>);
            } else {
                existRows.push(<div className="row main-overview-content-padding-margin">
                    <AppendButtonPanel title='Add Row' addCallback={this.clickAddRowButton.bind(this, rows)} />
                    <RemoveButtonPanel title='Remove Last Row' addCallback={this.clickRemoveLastRowButton.bind(this, rows)} />
                </div>);
            }

        }
        return existRows;
    }

    render() {
        let _overviewData = this.state.data;
        if (_overviewData != null) {
            return (
                <div className="main-content-padding animated bounceIn">
                    <Scrollbars renderTrackHorizontal={function () { return <div />; }} renderThumbHorizontal={function () { return <div />; }} style={{ height: Constants.UI.OverviewComponentContentHeight }}>
                        {this.renderRows(_overviewData.rows)}
                    </Scrollbars>
                </div>
            )
        } else {
            return null;
        }
    }

}

module.exports = OverviewComponent;