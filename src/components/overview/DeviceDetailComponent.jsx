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
import { RadialGauge, LinearGauge } from 'react-canvas-gauges'

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
                                            <Switcher style={{ width: '100' }} valueChangeFunc={_parent.unitSwitcherChange} value={Constants.Event.Detail_UnitChange_Value} items={[{ display: 'C', value: 'C' }, { display: 'F', value: 'F' }]} />
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
        if (_status == 0) {
            return (
                <tr>
                    <td>{this.props.field}</td>
                    <td className="text-right font-w600 font-ds-digital-s20">--</td>
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

class CHDetailChart extends React.Component {

    render() {
        let _data = this.props.data;
        //disable
        return (
            <div style={{ textAlign: 'center' }}>
                <div className='col-xs-12'  >
                    <RadialGauge units='°C'
                        title='Temp'
                        value={_data.temp}
                        width={200}
                        height={200}
                        minValue={0}
                        maxValue={100}

                        startAngle={70}
                        ticksAngle={220}

                        colorPlate="#ffffff"
                        colorUnits="#3CA7DB"
                        colorNumbers="#534638"
                        colorNeedle="#8E7860"
                        colorNeedleEnd="#8E7860"
                        colorNeedleCircleOuter="#8E7860"
                        colorNeedleCircleOuterEnd="#8E7860"

                        colorNeedleShadowUp="#8E7860"
                        colorNeedleShadowDown="#8E7860"

                        colorMajorTicks={["#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB"]}
                        colorMinorTicks="#EBEBEB"


                        majorTicks={['0', '25', '50', '75', '100']}
                        minorTicks={2}

                        highlights={[
                            {
                                "from": -0.25,
                                "to": 39.99,
                                "color": "#FF9488"
                            },
                            {
                                "from": 39.99,
                                "to": 59.99,
                                "color": "#8FB9BD"
                            },
                            {
                                "from": 59.99,
                                "to": 100.25,
                                "color": "#B1B9CB"
                            }
                        ]}

                        highlightsWidth={25}
                        numbersMargin={12}

                        animation={true}
                        animationRule="linear"
                        animatedValue={true}

                        borders={false}
                        valueBox={false}

                        needleType="arrow"
                        needleEnd={65}
                        needleWidth={4}
                        needleCircleSize={10}
                        needleCircleInner={false}
                        needleCircleOuter={true}
                        needleShadow={false}

                        borderShadowWidth={0}
                    >
                    </RadialGauge>
                </div>
                <div className='col-xs-12' >
                    <RadialGauge units='°C'
                        title='FQ'
                        value={_data.fq}
                        width={200}
                        height={200}
                        minValue={0}
                        maxValue={100}

                        startAngle={70}
                        ticksAngle={220}

                        colorPlate="#ffffff"
                        colorUnits="#3CA7DB"
                        colorNumbers="#534638"
                        colorNeedle="#8E7860"
                        colorNeedleEnd="#8E7860"
                        colorNeedleCircleOuter="#8E7860"
                        colorNeedleCircleOuterEnd="#8E7860"

                        colorNeedleShadowUp="#8E7860"
                        colorNeedleShadowDown="#8E7860"

                        colorMajorTicks={["#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB"]}
                        colorMinorTicks="#EBEBEB"


                        majorTicks={['0', '25', '50', '75', '100']}
                        minorTicks={2}

                        highlights={[
                            {
                                "from": -0.25,
                                "to": 39.99,
                                "color": "#FF9488"
                            },
                            {
                                "from": 39.99,
                                "to": 59.99,
                                "color": "#8FB9BD"
                            },
                            {
                                "from": 59.99,
                                "to": 100.25,
                                "color": "#B1B9CB"
                            }
                        ]}

                        highlightsWidth={25}
                        numbersMargin={12}

                        animation={true}
                        animationRule="linear"
                        animatedValue={true}

                        borders={false}
                        valueBox={false}

                        needleType="arrow"
                        needleEnd={65}
                        needleWidth={4}
                        needleCircleSize={10}
                        needleCircleInner={false}
                        needleCircleOuter={true}
                        needleShadow={false}

                        borderShadowWidth={0}
                    >
                    </RadialGauge>
                </div>
            </div>
        )
    }
}

class CHDetailTr extends React.Component {

    render() {
        let _status = this.props.status;
        if (_status == 0) {
            //disable
            return (
                <tr>
                    <td>{this.props.field}</td>
                    <td className="text-right font-w600 font-ds-digital-s20">--</td>
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
        let _status_dex = this.props.status;
        let _status_values = Utils.parseState(_status_dex);

        let _color = this.props.name == 'CH1' ? Utils.renderCh1Color(_status_values) : Utils.renderCh2Color(_status_values);
        let _text = this.props.name == 'CH1' ? Utils.renderCh1Text(_status_values) : Utils.renderCh2Text(_status_values);
        let _disable = this.props.name == 'CH1' ? _status_values.ch1dis : _status_values.ch2dis;
        return (
            <div className="col-sm-12 col-md-6 " style={{ padding: '0px 0px 0px 0px' }} >
                <div className="block block-bordered end-block-margin-bottom">
                    <div className="block-header bg-gray-lighter main-content-item-header">
                        <ul className="block-options">
                            <li>
                                <span className="label" style={{ backgroundColor: _color }}>{_text}</span>
                            </li>
                        </ul>
                        <h3 className="block-title">{this.props.name}</h3>
                    </div>
                    <div className="block-content" style={{ display: 'flow-root' }}>
                        <div className="block col-xs-12 col-sm-6">

                            <table className="table table-borderless table-condensed table-vcenter font-s13">
                                <tbody>
                                    <CHDetailTr field='FILE' value={_chdata.file == 0 ? 'File A' : 'File B'} status={_disable} />
                                    <CHDetailTr field='ON_TH' value={_chdata.onth} status={_disable} />
                                    <CHDetailTr field='ON_TL' value={_chdata.ontl} status={_disable} />
                                    <CHDetailTr field='MAX' value={_chdata.max} status={_disable} />
                                    <CHDetailTr field='MIN' value={_chdata.min} status={_disable} />
                                    <CHDetailTr field='DC' value={_chdata.dc} status={_disable} />
                                    <CHDetailTr field='AC' value={_chdata.ac} status={_disable} />
                                    <CHDetailTr field='FREQ' value={_chdata.freq} status={_disable} />
                                    <CHDetailTr field='TYPE' value={_chdata.type} status={_disable} />
                                    <CHDetailTr field='STATUS' value={_chdata.status} status={_disable} />
                                    <CHDetailTr field='FAULT' value={_chdata.fault} status={_disable} />
                                    <CHDetailTempTr field='TEMP' value={_chdata.temp} status={_disable} />
                                    <CHDetailTr field='FQ' value={_chdata.fq} status={_disable} />
                                </tbody>
                            </table>

                        </div>

                        <div className="block col-xs-12 col-sm-6">
                            <CHDetailChart data={_chdata} />
                        </div>
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
        Constants.Event.Detail_UnitChange_Value = selectedItem;
        EventProxy.trigger(Constants.Event.Detail_UnitChange_Key, selectedItem);
    }

    formatRefreshData(_data) {
        let _detailData = this.props.data;
        return _data.devices[_detailData.name];
    }

    getRefreshDataFunc(_callback) {
        let _detailData = this.props.data;
        OverviewService.requestServer(1, _detailData.name, _callback);
    }

    render() {
        let _detailData = this.state.refreshData ? this.state.refreshData : this.props.data;
        return (
            <div className="main-content-padding animated bounceIn">
                <Scrollbars renderTrackHorizontal={function () { return <div />; }} renderThumbHorizontal={function () { return <div />; }} style={{ height: Constants.UI.OverviewComponentContentHeight }}>
                    <div className="row main-detail-padding-margin">
                        <CHDetail data={_detailData.ch1} status={_detailData.status} name={'CH1'} />
                        <CHDetail data={_detailData.ch2} status={_detailData.status} name={'CH2'} />
                        <Descript parent={this} />
                    </div>
                </Scrollbars>
            </div>
        )
    }

}

module.exports = DeviceDetailComponent;