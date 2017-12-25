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

class AutoAssignButtonPanel extends React.Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-2 main-overview-item-padding" onClick={this.props.addCallback} >
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

            toastr.success('Refresh Overview Success.');
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
            OverviewService.requestServer(0, '', _callback);
        }
    }

    updateCurrentOverview() {
        EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Visible });
        OverviewService.requestUpdateOverview(this.state.data, function (json) {
            OverviewService.requestOverview(function (json) {

                this.setState({ data: json });
                toastr.success('Update Overview Success.');
                EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Invisible });
                //刷新其他UI
                EventProxy.trigger(Constants.Event.MainUI_Key, { data: json });
            }.bind(this));
        }.bind(this));
    }

    clickAddDeviceButton(row) {
        console.log(row);
        EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Visible });
        OverviewService.requestUpdateOverviewV3(3, row.title, undefined, undefined, function (json) {

            this.setState({ data: json });
            toastr.success('Update Overview Success.');
            EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Invisible });
            //刷新其他UI
            EventProxy.trigger(Constants.Event.MainUI_Key, { data: json });

        }.bind(this));
    }

    clickAddRowButton(rows) {
        EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Visible });
        OverviewService.requestUpdateOverviewV3(1, undefined, undefined, undefined, function (json) {

            this.setState({ data: json });
            toastr.success('Update Overview Success.');
            EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Invisible });
            //刷新其他UI
            EventProxy.trigger(Constants.Event.MainUI_Key, { data: json });

        }.bind(this));
    }

    clickRemoveItemButton(_item) {
        let _modalContent = <div>Delete Device {_item.name} ?</div>;
        let _okFunc = function () {
            let rowName = _item.name.substr(0, 1);
            console.log('rowName:', rowName);
            EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Visible });
            OverviewService.requestUpdateOverviewV3(4, rowName, undefined, undefined, function (json) {

                this.setState({ data: json });
                toastr.success('Update Overview Success.');
                EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Invisible });
                //刷新其他UI
                EventProxy.trigger(Constants.Event.MainUI_Key, { data: json });

            }.bind(this));
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
        let _lastRow = rows[rows.length - 1];
        let _lastRowName = _lastRow.title;

        let _modalContent = <div>Remove Row {_lastRowName} ?</div>;
        let _okFunc = function () {
            console.log('rowName:', _lastRowName);
            EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Visible });
            OverviewService.requestUpdateOverviewV3(2, _lastRowName, undefined, undefined, function (json) {

                this.setState({ data: json });
                toastr.success('Update Overview Success.');
                EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Invisible });
                //刷新其他UI
                EventProxy.trigger(Constants.Event.MainUI_Key, { data: json });

            }.bind(this));
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

    clickAutoAssignButton() {
        EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Visible });
        OverviewService.requestUpdateOverviewV3(5, undefined, undefined, undefined, function (json) {

            this.setState({ data: json });
            toastr.success('Update Overview Success.');
            EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Invisible });
            //刷新其他UI
            EventProxy.trigger(Constants.Event.MainUI_Key, { data: json });

        }.bind(this));
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
                    <AutoAssignButtonPanel title='Auto Assign' addCallback={this.clickAutoAssignButton.bind(this)} />
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