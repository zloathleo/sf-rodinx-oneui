import React from 'react';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';

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

//应用模板modal
class TemplateUseModalContent extends React.Component {

    render() {
        let _data = this.props.data;
        return (
            <div>
                <div className="form-group">
                    <label className="col-xs-12" for="login1-username">Template Name</label>
                    <select ref={(_ref) => this.inputTemplateName = _ref} className="form-control" id="val-skill" name="val-skill">
                        {
                            _data.map(function (item, i) {
                                return <option value={item}>{item}</option>
                            })
                        }
                    </select>
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
        StateManager.modalsState.setModal('Template Save', <TemplateSaveModalContent ref={(_ref) => this.modalContent = _ref} />, function () {

            const _inputTemplateName = this.modalContent.inputTemplateName;
            const _templateName = _inputTemplateName.value;

            OverviewService.requestSaveTemplate(_templateName, StateManager.dataState.detailJson.name, this.props.name, 'u', function (json) {
                console.log('ok:', json);
            }.bind(this));

        }.bind(this));
    }

    //使用模板
    onClickUseTemplateButton() {
        OverviewService.requestTemplate('u', function (json) {

            StateManager.modalsState.setModal('Template Choose', <TemplateUseModalContent data={json.rows} ref={(_ref) => this.modalContent = _ref} />, function () {

                const _inputTemplateName = this.modalContent.inputTemplateName;
                const _templateName = _inputTemplateName.value;

                OverviewService.requestUseTemplate(_templateName, StateManager.dataState.detailJson.name, this.props.name, 'u', function (json) {
                    console.log('ok:', json);
                }.bind(this));

            }.bind(this));

            console.log('template:', json);
        }.bind(this));
    }

    render() {
        let _ch = this.props.data;
        return (
            <div className="col-xs-12 col-sm-6" style={{ padding: '0px 3px' }} >
                <div className="block block-bordered end-block-margin-bottom">
                    <div className="block-header bg-gray-lighter">
                        <ul className="block-options">
                            <li> <button type="button" onClick={this.onClickSaveTemplateButton.bind(this)} data-toggle="modal" data-target="#modal-fromleft" >
                                <i className="glyphicon glyphicon-open"></i></button> </li>
                            <li> <button type="button" onClick={this.onClickUseTemplateButton.bind(this)} data-toggle="modal" data-target="#modal-fromleft" >
                                <i className="glyphicon glyphicon-save"></i></button> </li>
                        </ul>
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


                        <table className="table table-striped table-vcenter table-header-bg">
                            <thead>
                                <tr>
                                    <th className="text-center" style={{ width: '40%', padding: '3px' }}>Name</th>
                                    <th className="text-center" style={{ width: '30%', padding: '3px' }}>FileA</th>
                                    <th className="text-center" style={{ width: '30%', padding: '3px' }}>FileB</th>
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
        this.mergeData = this.mergeData.bind(this);
    }

    mergeData() {
        this.ch1SettingsPanel.mergeData();
        this.ch2SettingsPanel.mergeData();
    }

    render() {
        let _data = this.props.data;
        return (
            <div className="row animated bounceIn main-detail-padding-margin">
                <DeviceCHSettings ref={(_ref) => this.ch1SettingsPanel = _ref} name={'CH1'} data={_data.ch1} />
                <DeviceCHSettings ref={(_ref) => this.ch2SettingsPanel = _ref} name={'CH2'} data={_data.ch2} />
            </div>
        )
    }

}

module.exports = DeviceUserSettingsComponent;