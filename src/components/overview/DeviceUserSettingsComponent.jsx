import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Constants from '../../constants/Constants.jsx';
import EventProxy from '../../utils/EventProxy.jsx';

import AppState from '../../states/AppState.jsx';

import OverviewService from '../../services/OverviewService.jsx'

import Switcher from '../common/Switcher.jsx'
import EnableSwitcher from '../common/EnableSwitcher.jsx'

class SettingItem extends React.Component {

    valueA() {
        return this.inputAValue.value;
    }

    valueB() {
        return this.inputBValue.value;
    }

    render() {
        return (
            <tr>
                <td className="text-right setting-table-item-label-padding" style={{ paddingRight: '20px' }}>{this.props.label}</td>
                <td className="text-center setting-table-item-padding" ><input ref={(_ref) => this.inputAValue = _ref} className="form-control input-sm font-ds-digital-s20" type="text" defaultValue={this.props.av} /></td>
                <td className="text-center setting-table-item-padding" ><input ref={(_ref) => this.inputBValue = _ref} className="form-control input-sm font-ds-digital-s20" type="text" defaultValue={this.props.bv} /></td>
            </tr>
        )

    }
}

//保存模板modal
class TemplateSaveModalContent extends React.Component {

    render() {
        return (
            <div>
                <div className="form-group">
                    <label className="col-xs-12" for="login1-username">Template Name</label>
                    <input className="form-control input-sm" type="text" ref={(_ref) => this.inputTemplateName = _ref} />
                </div>
            </div>
        )
    }
}

//上传应用模板modal
class TemplateUseModalContent extends React.Component {

    clickFileChoose(_event) {
        let _files = _event.currentTarget.files;
        console.log('clickFileChoose');
        if (_files) {
            let _selectedFile = _files[0];
        }
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label className="btn btn-primary" for="my-file-selector">
                        <input type="file" ref={(_ref) => this.inputFilePath = _ref} onChange={this.clickFileChoose} style={{ display: 'none' }} />
                        Update Template File
                     </label>
                </div>
            </div>
        )
    }
}

class DeviceCHSettings extends React.Component {

    constructor(props) {
        super(props);
        this.mergeData = this.mergeData.bind(this);
    }

    mergeData() {
        let _ch = this.props.data;
        _ch.type = this.inputBurnerType.value();
        _ch.enable = this.inputChannelEnable.value();
        _ch.file = this.inputFile.value();

        _ch.filea.ac.ac_gain = parseInt(this.inputACGain.valueA());
        _ch.fileb.ac.ac_gain = parseInt(this.inputACGain.valueB());

        _ch.filea.ac.fc = parseInt(this.inputFC.valueA());
        _ch.fileb.ac.fc = parseInt(this.inputFC.valueB());

        _ch.filea.ac.ac_on_th = parseInt(this.inputACOnTh.valueA());
        _ch.fileb.ac.ac_on_th = parseInt(this.inputACOnTh.valueB());

        _ch.filea.ac.ac_on_tl = parseInt(this.inputACOnTL.valueA());
        _ch.fileb.ac.ac_on_tl = parseInt(this.inputACOnTL.valueB());

        _ch.filea.ac.max = parseInt(this.inputMax.valueA());
        _ch.fileb.ac.max = parseInt(this.inputMax.valueB());

        _ch.filea.ac.min = parseInt(this.inputMin.valueA());
        _ch.fileb.ac.min = parseInt(this.inputMin.valueB());

        //dc
        _ch.filea.dc.dc_gain = parseInt(this.inputDCGain.valueA());
        _ch.fileb.dc.dc_gain = parseInt(this.inputDCGain.valueB());

        _ch.filea.dc.dc_on_th = parseInt(this.inputDCOnTh.valueA());
        _ch.fileb.dc.dc_on_th = parseInt(this.inputDCOnTh.valueB());

        _ch.filea.dc.dc_on_tl = parseInt(this.inputDCOnTl.valueA());
        _ch.fileb.dc.dc_on_tl = parseInt(this.inputDCOnTl.valueB());

        //frequency
        _ch.filea.frequency.freq_on_th = parseInt(this.inputFrOnTh.valueA());
        _ch.fileb.frequency.freq_on_th = parseInt(this.inputFrOnTh.valueB());

        _ch.filea.frequency.freq_on_tl = parseInt(this.inputFrOnTl.valueA());
        _ch.fileb.frequency.freq_on_tl = parseInt(this.inputFrOnTl.valueB());

        //public
        _ch.filea.public.otd = parseInt(this.inputOtd.valueA());
        _ch.fileb.public.otd = parseInt(this.inputOtd.valueB());

        _ch.filea.public.ffrt = parseInt(this.inputFfrt.valueA());
        _ch.fileb.public.ffrt = parseInt(this.inputFfrt.valueB());
    }

    //保存模板
    onClickSaveTemplateButton() {
        OverviewService.requestDownloadTemplate(this.props.deviceName, this.props.name, 'u');
    }

    //使用模板
    onClickUseTemplateButton() {
        let _modalContent = <TemplateUseModalContent ref={(_ref) => this.templateUseModalContent = _ref} />;
        let _okFunc = function () {
            //todo
            let _files = this.templateUseModalContent.inputFilePath.files;
            if (_files) {
                let _selectedFile = _files[0];
                console.log(_selectedFile);

                OverviewService.requestUpdateTemplate(this.props.deviceName, this.props.name, _selectedFile, function (json) {
                    console.log('ok:', json);
                }.bind(this));
            }

        }.bind(this);

        let _dispatch = {
            uiName: 'UseUserSettingsChange',
            data: { title: 'Confirm' },
            exParams: {
                content: _modalContent,
                okFunc: _okFunc
            }
        }
        EventProxy.trigger(Constants.Event.ModalUI_Key, _dispatch);
    }

    render() {
        let _ch = this.props.data;
        let _updateTool = null;
        if (AppState.User_Name == 'admin') {
            _updateTool = (
                <ul className="block-options">
                    <li> <button type="button" onClick={this.onClickSaveTemplateButton.bind(this)} >
                        <i className="glyphicon glyphicon-save"></i></button> </li>
                    <li> <button type="button" onClick={this.onClickUseTemplateButton.bind(this)} data-toggle="modal" data-target="#modal-fromleft" >
                        <i className="glyphicon glyphicon-open"></i></button> </li>
                </ul>
            )
        }

        return (
            <div className="col-xs-12 col-sm-6" style={{ padding: '0px 0px' }} >
                <div className="block block-bordered end-block-margin-bottom">
                    <div className="block-header bg-gray-lighter">
                        {_updateTool}
                        <h3 className="block-title">{this.props.name}</h3>
                    </div>
                    <div className="block-content" style={{ padding: '10px 10px 1px' }}>

                        <table className="table table-borderless table-condensed table-vcenter" style={{ marginBottom: '0px' }}>
                            <tbody>
                                <tr>
                                    <td className="text-right setting-table-item-label-padding" style={{ paddingRight: '20px' }} >Burner Type</td>
                                    <td className="text-right setting-table-item-padding" style={{ width: '60%' }}>
                                        <Switcher ref={(_ref) => this.inputBurnerType = _ref} style={{ width: '100%' }} value={_ch.type} items={[{ display: 'IR', value: 'IR' }, { display: 'UV', value: 'UV' }]} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right setting-table-item-label-padding" style={{ paddingRight: '20px' }} >Channel En</td>
                                    <td className="text-right setting-table-item-padding" style={{ width: '60%' }}>
                                        <EnableSwitcher ref={(_ref) => this.inputChannelEnable = _ref} style={{ width: '100%' }} value={_ch.enable} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right setting-table-item-label-padding" style={{ paddingRight: '20px' }} >File</td>
                                    <td className="text-right setting-table-item-padding" style={{ width: '60%' }}>
                                        <Switcher ref={(_ref) => this.inputFile = _ref} style={{ width: '100%' }} value={_ch.file} items={[{ display: 'File A', value: 0 }, { display: 'File B', value: 1 }]} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                        <table className="table table-striped table-vcenter table-header-bg" style={{ marginTop: '20px' }}>
                            <thead>
                                <tr>
                                    <th className="text-center setting-table-header-th" style={{ width: '40%', padding: '3px' }}>Name</th>
                                    <th className="text-center setting-table-header-th" style={{ width: '30%', padding: '3px' }}>FileA</th>
                                    <th className="text-center setting-table-header-th" style={{ width: '30%', padding: '3px' }}>FileB</th>
                                </tr>
                            </thead>
                            <tbody>
                                <SettingItem ref={(_ref) => this.inputACGain = _ref} label={"AC Gain"} av={_ch.filea.ac.ac_gain} bv={_ch.fileb.ac.ac_gain} />
                                <SettingItem ref={(_ref) => this.inputFC = _ref} label={"FC"} av={_ch.filea.ac.fc} bv={_ch.fileb.ac.fc} />
                                <SettingItem ref={(_ref) => this.inputACOnTh = _ref} label={"AC ON_TH"} av={_ch.filea.ac.ac_on_th} bv={_ch.fileb.ac.ac_on_th} />
                                <SettingItem ref={(_ref) => this.inputACOnTL = _ref} label={"AC ON_TL"} av={_ch.filea.ac.ac_on_tl} bv={_ch.fileb.ac.ac_on_tl} />
                                <SettingItem ref={(_ref) => this.inputMax = _ref} label={"MAX"} av={_ch.filea.ac.max} bv={_ch.fileb.ac.max} />
                                <SettingItem ref={(_ref) => this.inputMin = _ref} label={"MIN"} av={_ch.filea.ac.min} bv={_ch.fileb.ac.min} />

                                <SettingItem ref={(_ref) => this.inputDCGain = _ref} label={"DC Gain"} av={_ch.filea.dc.dc_gain} bv={_ch.fileb.dc.dc_gain} />
                                <SettingItem ref={(_ref) => this.inputDCOnTh = _ref} label={"DC ON_TH"} av={_ch.filea.dc.dc_on_th} bv={_ch.fileb.dc.dc_on_th} />
                                <SettingItem ref={(_ref) => this.inputDCOnTl = _ref} label={"DC ON_TL"} av={_ch.filea.dc.dc_on_tl} bv={_ch.fileb.dc.dc_on_tl} />
                                <SettingItem ref={(_ref) => this.inputFrOnTh = _ref} label={"FREQ ON_TH"} av={_ch.filea.frequency.freq_on_th} bv={_ch.fileb.frequency.freq_on_th} />
                                <SettingItem ref={(_ref) => this.inputFrOnTl = _ref} label={"FREQ ON_TL"} av={_ch.filea.frequency.freq_on_tl} bv={_ch.fileb.frequency.freq_on_tl} />
                                <SettingItem ref={(_ref) => this.inputOtd = _ref} label={"OTD"} av={_ch.filea.public.otd} bv={_ch.fileb.public.otd} />
                                <SettingItem ref={(_ref) => this.inputFfrt = _ref} label={"FFRT"} av={_ch.filea.public.ffrt} bv={_ch.fileb.public.ffrt} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )

    }
}

class DeviceUserSettingsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
    }

    componentWillMount() {
        EventProxy.on(Constants.Event.UserSettingsUI_Save_Key, (_value) => {
            if (_value) {
                this.save();
            }
        });
    }

    componentWillUnmount() {
        EventProxy.off(Constants.Event.UserSettingsUI_Save_Key);
    }

    save() {
        this.ch1SettingsPanel.mergeData();
        this.ch2SettingsPanel.mergeData();
        let _data = this.props.data;
        OverviewService.requestUpdateDeviceSettings(_data.name, 'u', _data, function (_json) {
            console.log(_json);
        });
    }

    render() {
        let _data = this.props.data;
        return (
            <div className="main-content-padding animated bounceIn">
                <Scrollbars renderTrackHorizontal={function () { return <div />; }} renderThumbHorizontal={function () { return <div />; }} style={{ height: Constants.UI.OverviewComponentContentHeight }}>
                    <div className="row main-detail-padding-margin">
                        <DeviceCHSettings ref={(_ref) => this.ch1SettingsPanel = _ref} name={'CH1'} deviceName={_data.name} data={_data.ch1} />
                        <DeviceCHSettings ref={(_ref) => this.ch2SettingsPanel = _ref} name={'CH2'} deviceName={_data.name} data={_data.ch2} />
                    </div>
                </Scrollbars>
            </div>
        )
    }

}

module.exports = DeviceUserSettingsComponent;