import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { observer } from 'mobx-react';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';

import OverviewService from '../../services/OverviewService.jsx'

import Switcher from '../common/Switcher.jsx'
import BreadcrumbComponent from '../main/BreadcrumbComponent.jsx'

import DeviceUserSettingsComponent from './DeviceUserSettingsComponent.jsx'
import DeviceFactorySettingsComponent from './DeviceFactorySettingsComponent.jsx'

//设备详情
class Descript extends React.Component {

    render() {

        return (
            <div className="col-xs-12" style={{ padding: '0px 5px' }}>
                <div className="block block-bordered">
                    <div className="block-content">
                        <div className="row" >
                            <div className="col-xs-12 col-sm-6" >
                                <ul className="list-unstyled weather-info">
                                    <li><span>C</span><span className="pull-right font-w600">Celsius</span></li>
                                    <li><span>F</span><span className="pull-right font-w600">Fahrenhert</span></li>
                                    <li><span>IR</span><span className="pull-right font-w600">Infrared</span></li>
                                    <li><span>UV</span><span className="pull-right font-w600">Ultraviolet</span></li>
                                    <li><span>Fault</span><span className="pull-right font-w600">Error Code(Hex)</span></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6" >
                                <ul className="list-unstyled weather-info">
                                    <li><span>MAX</span><span className="pull-right font-w600">AC Maximum</span></li>
                                    <li><span>MIN</span><span className="pull-right font-w600">AC Minimum</span></li>
                                    <li><span>TEMP</span><span className="pull-right font-w600">Temperature</span></li>
                                    <li><span>ON_TL</span><span className="pull-right font-w600">ON Threshold in Low</span></li>
                                    <li><span>ON_TH</span><span className="pull-right font-w600">ON Threshold in High</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


@observer
class CHDetailTempTr extends React.Component {

    render() {
        if (StateManager.uiState.tempUnit == 'C') {
            return (
                <tr>
                    <td>{this.props.field}</td>
                    <td className="text-right font-w600 font-ds-digital-s20">{this.props.value}</td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td>{this.props.field}</td>
                    <td className="text-right font-w600 font-ds-digital-s20">{this.props.value * 1.8 + 32}</td>
                </tr>
            )
        }
    }
}

class CHDetailTr extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.field}</td>
                <td className="text-right font-w600 font-ds-digital-s20">{this.props.value}</td>
            </tr>
        )
    }
}

class CHDetail extends React.Component {
    render() {
        let _chdata = this.props.data;
        return (
            <div className="col-xs-12 col-sm-6" style={{ padding: '0px 3px' }} >
                <div className="block block-bordered end-block-margin-bottom">
                    <div className="block-header bg-gray-lighter main-content-item-header">
                        <h3 className="block-title">{this.props.name}</h3>
                    </div>
                    <div className="block-content">
                        <table className="table table-borderless table-condensed table-vcenter font-s13">
                            <tbody>
                                <CHDetailTr field='FILE' value={_chdata.file == 0 ? 'File A' : 'File B'} />
                                <CHDetailTr field='ON_TH' value={_chdata.onth} />
                                <CHDetailTr field='ON_TL' value={_chdata.ontl} />
                                <CHDetailTr field='MAX' value={_chdata.max} />
                                <CHDetailTr field='MIN' value={_chdata.min} />
                                <CHDetailTr field='DC' value={_chdata.dc} />
                                <CHDetailTr field='AC' value={_chdata.ac} />
                                <CHDetailTr field='FREQ' value={_chdata.freq} />
                                <CHDetailTr field='TYPE' value={_chdata.type} />
                                <CHDetailTr field='STATUS' value={_chdata.status} />
                                <CHDetailTr field='FAULT' value={_chdata.fault} />
                                <CHDetailTempTr field='TEMP' value={_chdata.temp} />
                                <CHDetailTr field='FQ' value={_chdata.fq} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

@observer
class DeviceContentComponent extends React.Component {

    constructor(props) {
        super(props);
        // this.state = { settingsData: undefined };
        this.settingsData = undefined;
        this.onClickUserSettingsButton = this.onClickUserSettingsButton.bind(this);
        this.onClickFactorySettingsButton = this.onClickFactorySettingsButton.bind(this);
        this.unitSwitcherChange = this.unitSwitcherChange.bind(this);
        this.onClickSaveSettings = this.onClickSaveSettings.bind(this);
    }

    //保存settings
    onClickSaveSettings() {
        if (StateManager.appState.activeModuleLevel2Name == Constants.Values.Overview_Level2_UserSettings) {
            this.userSettingsComponent.mergeData();
            console.log(JSON.stringify(this.settingsData));
            OverviewService.requestUpdateDeviceSettings(StateManager.dataState.detailJson.name, 'u', this.settingsData, function (json) {

            });
        } else if (StateManager.appState.activeModuleLevel2Name == Constants.Values.Overview_Level2_FactorySettings) {
            OverviewService.requestUpdateDeviceSettings(StateManager.dataState.detailJson.name, 's', this.settingsData, function (json) {

            });
        }
    }

    onClickUserSettingsButton() {
        StateManager.appState.setMainLoading(true);
        OverviewService.requestDeviceSettings(StateManager.dataState.detailJson.name, 'u', 'm', function (json) {
            this.settingsData = json;
            StateManager.appState.setMainLoading(false);
            StateManager.appState.setActiveModuleLevel2Name(Constants.Values.Overview_Level2_UserSettings);
            // this.setState({ type: 1, settingsData: json });
        }.bind(this));
    }

    onClickFactorySettingsButton() {
        StateManager.appState.setMainLoading(true);
        OverviewService.requestDeviceSettings(StateManager.dataState.detailJson.name, 's', 'm', function (json) {
            this.settingsData = json;
            StateManager.appState.setMainLoading(false);
            StateManager.appState.setActiveModuleLevel2Name(Constants.Values.Overview_Level2_FactorySettings);
            // this.setState({ type: 2, settingsData: json });
        }.bind(this));
    }

    unitSwitcherChange(selectedItem) {//第一选项是否选中 即摄氏度是否选中  
        StateManager.uiState.setTempUnit(selectedItem);
    }

    render() {
        if (StateManager.appState.activeModuleLevel2Name == Constants.Values.Overview_Level2_UserSettings) {
            return (
                <DeviceUserSettingsComponent ref={(_ref) => this.userSettingsComponent = _ref} data={this.settingsData} />
            )
        } else if (StateManager.appState.activeModuleLevel2Name == Constants.Values.Overview_Level2_FactorySettings) {
            return (
                <DeviceFactorySettingsComponent ref={(_ref) => this.factorySettingsComponent = _ref} data={this.settingsData} />
            )
        } else {
            return (
                <div className="row animated bounceIn main-detail-padding-margin">
                    <CHDetail name={'CH1'} data={StateManager.dataState.detailJson.ch1} />
                    <CHDetail name={'CH2'} data={StateManager.dataState.detailJson.ch1} />
                    <Descript />
                </div>
            )
        }
    }
}


@observer
class ButtonGroup extends React.Component {

    render() {
        let _parent = this.props.parent;
        if (StateManager.appState.activeModuleLevel2Name == Constants.Values.Overview_Level2_UserSettings) {
            return (
                <ul className="block-options-simple">
                    <button className="btn btn-square btn-sm btn-primary" onClick={_parent.onClickSaveSettings} style={{ margin: '0 2px 0 0' }}>
                        <i className="fa fa-check"></i> <span>Save</span></button>
                </ul>
            )
        } else if (StateManager.appState.activeModuleLevel2Name == Constants.Values.Overview_Level2_FactorySettings) {
            return (
                <ul className="block-options-simple">
                    <button className="btn btn-square btn-sm btn-danger" onClick={_parent.onClickSaveSettings} style={{ margin: '0 2px 0 0' }}>
                        <i className="fa fa-check"></i> <span>Save</span></button>
                </ul>
            )
        } else {
            return (
                <ul className="block-options-simple">
                    <button className="btn btn-square btn-sm btn-danger" onClick={_parent.onClickFactorySettingsDelegate} style={{ margin: '0 2px 0 0' }}>
                        <i className="fa fa-wrench" aria-hidden="true"></i> <span className="hidden-xs hidden-sm">FactorySettings</span></button>

                    <button className="btn btn-square btn-sm btn-primary" onClick={_parent.onClickUserSettingsDelegate} style={{ margin: '0 2px 0 0' }}>
                        <i className="glyphicon glyphicon-cog"></i> <span className="hidden-xs hidden-sm">UserSettings</span></button>

                    <Switcher style={{ width: '100' }} valueChangeFunc={_parent.unitSwitcherChangeDelegate} value='C' items={[{ display: 'C', value: 'C' }, { display: 'F', value: 'F' }]} />
                </ul>
            )
        }
    }
}


class DeviceDetailComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onClickUserSettingsDelegate = this.onClickUserSettingsDelegate.bind(this);
        this.onClickFactorySettingsDelegate = this.onClickFactorySettingsDelegate.bind(this);
        this.unitSwitcherChangeDelegate = this.unitSwitcherChangeDelegate.bind(this);
        this.onClickSaveSettings = this.onClickSaveSettings.bind(this);
    }

    //保存settings
    onClickSaveSettings() {
        console.log('onClickSaveSettings');
        this.deviceContentComponent.onClickSaveSettings();
    }

    onClickFactorySettingsDelegate() {
        this.deviceContentComponent.onClickFactorySettingsButton();
    }

    onClickUserSettingsDelegate() {
        this.deviceContentComponent.onClickUserSettingsButton();
    }

    unitSwitcherChangeDelegate(selected) {//第一选项是否选中 即摄氏度是否选中 
        this.deviceContentComponent.unitSwitcherChange(selected);
    }

    render() {
        return (
            <div className="block" style={{ marginBottom: '0px' }}>
                <div className="block-header bg-gray-lighter overview-head-padding">
                    <ButtonGroup parent={this} />
                    <BreadcrumbComponent />
                </div>
                <div className="block-content main-content-padding"  >
                    <Scrollbars style={{ height: StateManager.uiState.OverviewTopContentHeight }}>
                        <DeviceContentComponent ref={(_ref) => this.deviceContentComponent = _ref} />
                    </Scrollbars>
                </div>
            </div>
        )
    }

}

module.exports = DeviceDetailComponent;