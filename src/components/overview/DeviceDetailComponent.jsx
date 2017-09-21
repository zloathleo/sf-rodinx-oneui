import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';

import OverviewService from '../../services/OverviewService.jsx'

import Switcher from '../common/Switcher.jsx'
import BreadcrumbComponent from '../main/BreadcrumbComponent.jsx'

import DeviceSettingsComponent from './DeviceSettingsComponent.jsx'


class Descript extends React.Component {

    render() {

        return (
            <div className="col-xs-12 animated bounceInDown" style={{ padding: '0px 5px' }}>
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
            <div className="col-xs-12 col-sm-6 animated bounceInDown" style={{ padding: '0px 5px' }} >
                <div className="block block-bordered">
                    <div className="block-header bg-gray-lighter">
                        <h3 className="block-title">{this.props.name}</h3>
                    </div>
                    <div className="block-content">
                        <table className="table table-borderless table-condensed table-vcenter font-s13">
                            <tbody>
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
                                <CHDetailTr field='TEMP' value={_chdata.temp} />
                                <CHDetailTr field='FQ' value={_chdata.fq} />

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

class DeviceContentComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showSettings: false, userSettingsData: undefined };
        this.onClickUserSettingsButton = this.onClickUserSettingsButton.bind(this);
        this.unitSwitcherChange = this.unitSwitcherChange.bind(this);
    }

    onClickUserSettingsButton() {
        if (!this.state.showSettings) {
            StateManager.appState.setMainLoading(true);
            OverviewService.requestDeviceUserSettings(StateManager.dataState.detailJson.name, 'u', 'm', function (json) {
                StateManager.appState.setMainLoading(false);
                console.log(json);
                this.setState({ showSettings: true, userSettingsData: json });
            }.bind(this));
        } else {
            this.setState({ showSettings: false, userSettingsData: undefined });
        }

    }

    unitSwitcherChange(selected) {//第一选项是否选中 即摄氏度是否选中  
        if (selected) {
            console.log('摄氏度');
        } else {
            console.log('华氏度');
        }
    }

    render() {
        if (this.state.showSettings) {
            return (
                <div className="block-content" style={{ padding: '10px 5px 10px' }}>
                    <Scrollbars style={{ height: StateManager.uiState.OverviewTopContentHeight }}>
                        <DeviceSettingsComponent data={this.state.userSettingsData} />
                    </Scrollbars>
                </div>
            )
        } else {
            return (
                <div className="block-content" style={{ padding: '10px 5px 10px' }}>
                    <Scrollbars style={{ height: StateManager.uiState.OverviewTopContentHeight }}>
                        <div className="row" style={{ marginRight: '10px', marginLeft: '10px' }}>
                            <CHDetail name={'CH1'} data={StateManager.dataState.detailJson.ch1} />
                            <CHDetail name={'CH2'} data={StateManager.dataState.detailJson.ch1} />
                            <Descript />
                        </div>
                    </Scrollbars>
                </div>
            )
        }
    }
}


class DeviceDetailComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onClickUserSettingsDelegate = this.onClickUserSettingsDelegate.bind(this);
        this.unitSwitcherChangeDelegate = this.unitSwitcherChangeDelegate.bind(this);
    }

    onClickUserSettingsDelegate() {
        this.deviceContentComponent.onClickUserSettingsButton();
    }

    unitSwitcherChangeDelegate(selected) {//第一选项是否选中 即摄氏度是否选中 
        this.deviceContentComponent.unitSwitcherChange(selected);
    }

    render() {
        return (
            <div className="col-xs-12" style={{ padding: '0 2%' }}>
                <div className="block" style={{ marginBottom: '0px' }}>
                    <div className="block-header bg-gray-lighter" style={{ padding: '15px 15px' }}>
                        <ul className="block-options-simple">
                            <button className="btn btn-square btn-sm btn-primary" onClick={this.onClickUserSettingsDelegate} style={{ margin: '0 5px' }}>
                                <i className="glyphicon glyphicon-cog"></i> <span className="hidden-xs hidden-sm">UserSettings</span></button>

                            <Switcher style={{ width: '100' }} valueChangeFunc={this.unitSwitcherChangeDelegate} items={[{ display: 'C', selected: true }, { display: 'F', selected: false }]} />
                        </ul>
                        <BreadcrumbComponent />
                    </div>
                    <DeviceContentComponent ref={(_ref) => this.deviceContentComponent = _ref} />
                </div>
            </div>
        )
    }

}

module.exports = DeviceDetailComponent;