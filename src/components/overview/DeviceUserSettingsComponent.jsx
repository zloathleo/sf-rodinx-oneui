import React from 'react';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';

import OverviewService from '../../services/OverviewService.jsx'

import Switcher from '../common/Switcher.jsx'

class SettingItem extends React.Component {
    render() {
        return (
            <tr>
                <td className="text-right setting-table-item-label-padding" style={{ paddingRight: '20px' }}>{this.props.label}</td>
                <td className="text-center setting-table-item-padding" ><input className="form-control input-sm font-ds-digital-s20" type="text" defaultValue={this.props.av} /></td>
                <td className="text-center setting-table-item-padding" ><input className="form-control input-sm font-ds-digital-s20" type="text" defaultValue={this.props.bv} /></td>
            </tr>
        )

    }
}

//保存模板modal
class TemplateSaveModalContent extends React.Component {

    okFunc() {
        console.log(123);
    }

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

class DeviceCHSettings extends React.Component {

    onClickSaveTemplateButton() {
        StateManager.modalsState.setModal('Template Save', <TemplateSaveModalContent ref={(_ref) => this.templateSaveModalContent = _ref} />, function () {

            const _inputTemplateName = this.templateSaveModalContent.inputTemplateName;
            const _templateName = _inputTemplateName.value;

            OverviewService.requestSaveTemplate(_templateName, StateManager.dataState.detailJson.name, this.props.name, 'u', function (json) {
                console.log('ok:', json);
            }.bind(this));

        }.bind(this));
    }

    onClickUseTemplateButton() {

    }

    render() {
        let _ch = this.props.data;
        let _typeItem = this.props.data.type == 'IR' ? [{ display: 'IR', selected: true }, { display: 'UV' }] : [{ display: 'IR' }, { display: 'UV', selected: true }];
        let _enItem = this.props.data.enable == 1 ? [{ display: 'Enable', selected: true }, { display: 'Disable' }] : [{ display: 'Enable' }, { display: 'Disable', selected: true }];
        let _fileItem = this.props.data.file == 1 ? [{ display: 'File A', selected: true }, { display: 'File B' }] : [{ display: 'File A' }, { display: 'File B', selected: true }];
        return (
            <div className="col-xs-12 col-sm-6" style={{ padding: '0px 3px' }} >
                <div className="block block-bordered">
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
                                        <Switcher style={{ width: '100%' }} items={_typeItem} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right setting-table-item-label-padding" style={{ paddingRight: '20px' }} >Channel En</td>
                                    <td className="text-right setting-table-item-padding" style={{ width: '60%' }}>
                                        <Switcher style={{ width: '100%' }} items={_enItem} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-right setting-table-item-label-padding" style={{ paddingRight: '20px' }} >File</td>
                                    <td className="text-right setting-table-item-padding" style={{ width: '60%' }}>
                                        <Switcher style={{ width: '100%' }} items={_fileItem} />
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
                                <SettingItem label={"AC Gain"} av={_ch.filea.ac.ac_gain} bv={_ch.fileb.ac.ac_gain} />
                                <SettingItem label={"FC"} av={_ch.filea.ac.fc} bv={_ch.fileb.ac.fc} />
                                <SettingItem label={"AC ON_TH"} av={_ch.filea.ac.ac_on_th} bv={_ch.fileb.ac.ac_on_th} />
                                <SettingItem label={"AC ON_TL"} av={_ch.filea.ac.ac_on_tl} bv={_ch.fileb.ac.ac_on_tl} />
                                <SettingItem label={"MAX"} av={_ch.filea.ac.max} bv={_ch.fileb.ac.max} />
                                <SettingItem label={"MIN"} av={_ch.filea.ac.min} bv={_ch.fileb.ac.min} />

                                <SettingItem label={"DC Gain"} av={_ch.filea.dc.dc_gain} bv={_ch.fileb.dc.dc_gain} />
                                <SettingItem label={"DC ON_TH"} av={_ch.filea.dc.dc_on_th} bv={_ch.fileb.dc.dc_on_th} />
                                <SettingItem label={"DC ON_TL"} av={_ch.filea.dc.dc_on_tl} bv={_ch.fileb.dc.dc_on_tl} />
                                <SettingItem label={"FREQ ON_TH"} av={_ch.filea.frequency.freq_on_th} bv={_ch.fileb.frequency.freq_on_th} />
                                <SettingItem label={"FREQ ON_TL"} av={_ch.filea.frequency.freq_on_tl} bv={_ch.fileb.frequency.freq_on_tl} />
                                <SettingItem label={"OTD"} av={_ch.filea.public.otd} bv={_ch.fileb.public.otd} />
                                <SettingItem label={"FFRT"} av={_ch.filea.public.ffrt} bv={_ch.fileb.public.ffrt} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )

    }
}

class DeviceUserSettingsComponent extends React.Component {

    render() {
        let _data = this.props.data;
        return (
            <div className="row animated bounceInDown main-content-row-padding-margin">
                <DeviceCHSettings name={'CH1'} data={_data.ch1} />
                <DeviceCHSettings name={'CH2'} data={_data.ch2} />
            </div>
        )
    }

}

module.exports = DeviceUserSettingsComponent;