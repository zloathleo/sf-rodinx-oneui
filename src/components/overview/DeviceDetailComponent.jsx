import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import EventProxy from '../../utils/EventProxy.jsx';
import Constants from '../../constants/Constants.jsx';
import Utils from '../../utils/Utils.jsx';

import OverviewService from '../../services/OverviewService.jsx';
import RefreshUI from '../common/RefreshUI.jsx';
import Switcher from '../common/Switcher.jsx';

import DeviceUserSettingsComponent from './DeviceUserSettingsComponent.jsx';
import DeviceFactorySettingsComponent from './DeviceFactorySettingsComponent.jsx';

//设备详情
class Descript extends React.Component {

    render() {
        let _parent = this.props.parent;
        return (
            <div className="col-xs-12" style={{ padding: '0px 0px' }}>
                <div className="block block-bordered" style={{ marginBottom: '1px' }}>
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
                                    <li>
                                        <span>TEMP UNIT</span>
                                        <span className="pull-right font-w600">
                                            <Switcher style={{ width: '100' }} valueChangeFunc={_parent.unitSwitcherChange} value='C' items={[{ display: 'C', value: 'C' }, { display: 'F', value: 'F' }]} />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

class CHDetailTempTr extends React.Component {

    constructor(props) {
        super(props);
        this.state = { unit: 'C' };
    }

    componentWillMount() {
        EventProxy.on(Constants.Event.Detail_UnitChange_Key, (_unit) => {
            this.setState({ unit: _unit });
        });
    }

    componentWillUnmount() {
        EventProxy.off(Constants.Event.Detail_UnitChange_Key);
    }

    render() {
        let _value = this.props.value;
        if (this.state.unit == 'C') {
            _value = this.props.value;
        } else {
            _value = this.props.value * 1.8 + 32;
        }
        let _valueDisplay = _value.toFixed(1);

        let _status = this.props.status;
        if (_status == 3) {
            return (
                <tr>
                    <td>{this.props.field}</td>
                    <td className="text-right font-w600 font-ds-digital-s20"><del>{_valueDisplay}</del></td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td>{this.props.field}</td>
                    <td className="text-right font-w600 font-ds-digital-s20">{_valueDisplay}</td>
                </tr>
            )
        }
    }
}

class CHDetailTr extends React.Component {

    render() {
        let _status = this.props.status;
        if (_status == 3) {
            //disable
            return (
                <tr>
                    <td>{this.props.field}</td>
                    <td className="text-right font-w600 font-ds-digital-s20"><del>{this.props.value}</del></td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td>{this.props.field}</td>
                    <td className="text-right font-w600 font-ds-digital-s20">{this.props.value}</td>
                </tr>
            )
        }

    }
}

class CHDetail extends React.Component {
    render() {
        let _chdata = this.props.data;
        if (!_chdata) {
            return null;
        }
        let _status = _chdata.status;
        let _color = Utils.renderColor(_status);
        let _text = Utils.renderText(_status);

        return (
            <div className="col-xs-12 col-sm-6" style={{ padding: '0px 0px 0px 0px' }} >
                <div className="block block-bordered end-block-margin-bottom">

                    <div className="block-header bg-gray-lighter main-content-item-header">
                        <ul className="block-options">
                            <li>
                                <span className="label" style={{ backgroundColor: _color }}>{_text}</span>
                            </li>
                        </ul>
                        <h3 className="block-title">{this.props.name}</h3>
                    </div>

                    <div className="block-content">
                        <table className="table table-borderless table-condensed table-vcenter font-s13">
                            <tbody>
                                <CHDetailTr field='FILE' value={_chdata.file == 0 ? 'File A' : 'File B'} status={_status} />
                                <CHDetailTr field='ON_TH' value={_chdata.onth} status={_status} />
                                <CHDetailTr field='ON_TL' value={_chdata.ontl} status={_status} />
                                <CHDetailTr field='MAX' value={_chdata.max} status={_status} />
                                <CHDetailTr field='MIN' value={_chdata.min} status={_status} />
                                <CHDetailTr field='DC' value={_chdata.dc} status={_status} />
                                <CHDetailTr field='AC' value={_chdata.ac} status={_status} />
                                <CHDetailTr field='FREQ' value={_chdata.freq} status={_status} />
                                <CHDetailTr field='TYPE' value={_chdata.type} status={_status} />
                                <CHDetailTr field='STATUS' value={_chdata.status} status={_status} />
                                <CHDetailTr field='FAULT' value={_chdata.fault} status={_status} />
                                <CHDetailTempTr field='TEMP' value={_chdata.temp} status={_status} />
                                <CHDetailTr field='FQ' value={_chdata.fq} status={_status} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

class DeviceDetailComponent extends RefreshUI {

    constructor(props) {
        super(props);
        this.unitSwitcherChange = this.unitSwitcherChange.bind(this);
    }

    unitSwitcherChange(selectedItem) {//第一选项是否选中 即摄氏度是否选中   
        EventProxy.trigger(Constants.Event.Detail_UnitChange_Key, selectedItem);
    }

    formatRefreshData(_data) {
        return _data.device;
    }

    getRefreshDataFunc(_callback) {
        let _detailData = this.props.data;
        OverviewService.requestServer(2, _detailData.name, _callback);
    }

    render() {
        let _detailData = this.state.refreshData ? this.state.refreshData : this.props.data;
        return (
            <div className="main-content-padding animated bounceIn">
                <Scrollbars renderTrackHorizontal={function () { return <div />; }} renderThumbHorizontal={function () { return <div />; }} style={{ height: Constants.UI.OverviewComponentContentHeight }}>
                    <div className="row main-detail-padding-margin">
                        <CHDetail data={_detailData.ch1} name={'CH1'} />
                        <CHDetail data={_detailData.ch2} name={'CH2'} />
                        <Descript parent={this} />
                    </div>
                </Scrollbars>
            </div>
        )
    }

}

module.exports = DeviceDetailComponent;