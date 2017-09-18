import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';

import Switcher from '../common/Switcher.jsx'
import BreadcrumbComponent from '../main/BreadcrumbComponent.jsx'

class Descript extends React.Component {

    render() {
        return (
            <div className="col-xs-12" >
                <div className="block block-bordered">
                    <div className="block-content">

                        <div className="row" >
                            <div className="col-xs-6" >
                                <ul className="list-unstyled weather-info">
                                    <li><span>C</span><span className="pull-right">Celsius</span></li>
                                    <li><span>F</span><span className="pull-right">Fahrenhert</span></li>
                                    <li><span>IR</span><span className="pull-right">Infrared</span></li>
                                    <li><span>UV</span><span className="pull-right">Ultraviolet</span></li>
                                    <li><span>Fault</span><span className="pull-right">Error Code(Hex)</span></li>
                                </ul>
                            </div>
                            <div className="col-xs-6" >
                                <ul className="list-unstyled weather-info">
                                    <li><span>MAX</span><span className="pull-right">AC Maximum</span></li>
                                    <li><span>MIN</span><span className="pull-right">AC Minimum</span></li>
                                    <li><span>TEMP</span><span className="pull-right">Temperature</span></li>
                                    <li><span>ON_TL</span><span className="pull-right">ON Threshold in Low</span></li>
                                    <li><span>ON_TH</span><span className="pull-right">ON Threshold in High</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

class CHDetail extends React.Component {
    render() {
        return (

            <div className="col-xs-12 col-sm-6 " >
                <div className="block block-bordered">
                    <div className="block-header bg-gray-lighter">
                        <ul className="block-options">
                            <li>
                                <button type="button"><i className="si si-settings"></i></button>
                            </li>
                        </ul>
                        <h3 className="block-title">CH1</h3>
                    </div>
                    <div className="block-content">
                        <table className="table table-borderless table-condensed table-vcenter font-s13">
                            <tbody>
                                <tr>
                                    <td  >ON_TH</td>
                                    <td className="text-right">720</td>
                                </tr>
                                <tr>
                                    <td >ON_TL</td>
                                    <td className="text-right">2355</td>
                                </tr>
                                <tr>
                                    <td >MAX</td>
                                    <td className="text-right">2 hrs</td>
                                </tr>
                                <tr>
                                    <td >MIN</td>
                                    <td className="text-right">2 hrs</td>
                                </tr>
                                <tr>
                                    <td >DC</td>
                                    <td className="text-right">2 hrs</td>
                                </tr>
                                <tr>
                                    <td >AC</td>
                                    <td className="text-right">2 hrs</td>
                                </tr>
                                <tr>
                                    <td >TYPE</td>
                                    <td className="text-right">2 hrs</td>
                                </tr>
                                <tr>
                                    <td >STATUS</td>
                                    <td className="text-right">2 hrs</td>
                                </tr>
                                <tr>
                                    <td >FAULT</td>
                                    <td className="text-right">2 hrs</td>
                                </tr>
                                <tr>
                                    <td >TEMP</td>
                                    <td className="text-right">2 hrs</td>
                                </tr>
                                <tr>
                                    <td >FQ</td>
                                    <td className="text-right">2 hrs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}


class DeviceDetailComponent extends React.Component {

    constructor(props) {
        super(props);
        this.unitSwitcherChange = this.unitSwitcherChange.bind(this);
    }

    onClickUserSettingsButton(dataJson) {

    }

    unitSwitcherChange(selected) {//第一选项是否选中 即摄氏度是否选中 
        if (selected) {
            console.log('摄氏度');
        } else {
            console.log('华氏度');
        }
    }

    render() {
        let dataJson = StateManager.dataState.detailJson;
        return (
            <div className="col-xs-12" style={{ padding: '0 2%' }}>
                <div className="block" style={{ marginBottom: '0px' }}>
                    <div className="block-header">
                        <ul className="block-options-simple">
                            <button className="btn btn-square btn-sm btn-primary" onClick={this.onClickUserSettingsButton.bind(this, dataJson)} data-toggle="modal" data-target="#modal-fromleft" style={{ margin: '0 2px' }}>
                                <i className="glyphicon glyphicon-cog"></i> UserSettings</button>

                            <Switcher valueChangeFunc={this.unitSwitcherChange} items={[{ display: 'C', selected: true }, { display: 'F', selected: false }]} />
                        </ul>
                        <BreadcrumbComponent />
                    </div>
                    <div className="block-content" style={{ paddingTop: '1px' }}>
                        <Scrollbars style={{ height: StateManager.appState.OverviewTopContentHeight }}>
                            <div className="row" style={{ marginRight: '10px', marginLeft: '10px' }}>
                                <CHDetail />
                                <CHDetail />
                                <Descript />
                            </div>
                        </Scrollbars>
                    </div>
                </div>
            </div>
        )
    }

}

module.exports = DeviceDetailComponent;