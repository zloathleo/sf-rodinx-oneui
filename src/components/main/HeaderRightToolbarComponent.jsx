import React from 'react';

import Constants from '../../constants/Constants.jsx';
import EventProxy from '../../utils/EventProxy.jsx';
import EventDriveUI from '../common/EventDriveUI.jsx';

import AppState from '../../states/AppState.jsx';

import OverviewService from '../../services/OverviewService.jsx';
import LayoutConfigModalContent from '../modal/LayoutConfigModalContent.jsx';

class HeaderRightToolbarComponent extends EventDriveUI {

    constructor(props) {
        super(props);
        this.uiEventKey = Constants.Event.MainUI_Key;
        this.uiDefaultValue = Constants.Event.MainUI_Value_Overview;
    }

    //进入userSettings
    onClickUserSettingsButton(_detailData) {
        EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Visible });
        OverviewService.requestDeviceSettings(_detailData.name, 'u', 'm', function (json) {
            EventProxy.trigger(Constants.Event.MainUI_Key, {
                uiName: Constants.Event.MainUI_Value_Overview_Detail_UserSettings,
                data: json
            });
            EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Invisible });
        });
    }

    //进入FactorySettings
    onClickFactorySettingsButton(_detailData) {
        EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Visible });
        OverviewService.requestDeviceSettings(_detailData.name, 's', 'm', function (json) {
            EventProxy.trigger(Constants.Event.MainUI_Key, {
                uiName: Constants.Event.MainUI_Value_Overview_Detail_FactorySettings,
                data: json
            });
            EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Invisible });
        });
    }

    //保存usersettings
    onClickSaveUserSettingsButton() {
        let _modalContent = <div>Save UserSettings Change ?</div>;
        let _okFunc = function () {
            EventProxy.trigger(Constants.Event.UserSettingsUI_Save_Key, true);
        }.bind(this);

        let _dispatch = {
            uiName: 'SaveUserSettingsChange',
            data: { title: 'Confirm' },
            exParams: {
                content: _modalContent,
                okFunc: _okFunc
            }
        }
        EventProxy.trigger(Constants.Event.ModalUI_Key, _dispatch);
    }

    //保存factory settings
    onClickSaveFactorySettingsButton() {
        let _modalContent = <div>Save FactorySettings Change ?</div>;
        let _okFunc = function () {
            console.log('ok onClickSaveUserSettingsButton');
            //todo
            EventProxy.trigger(Constants.Event.FactorySettingsUI_Save_Key, true);
        }.bind(this);

        let _dispatch = {
            uiName: 'SaveFactorySettingsChange',
            data: { title: 'Confirm' },
            exParams: {
                content: _modalContent,
                okFunc: _okFunc
            }
        }
        EventProxy.trigger(Constants.Event.ModalUI_Key, _dispatch);
    }

    //配置com口和波特率
    onClickConfigLayoutButton(_overviewData) {
        OverviewService.requestPorts(function (json) {
            let _modalContent = <LayoutConfigModalContent ports={json} overviewData={_overviewData} ref={(_ref) => this.layoutConfigModalContent = _ref} />;
            let _okFunc = function () {

                const _inputPort = this.layoutConfigModalContent.inputPort.value;
                const _inputBoadRate = this.layoutConfigModalContent.inputBoadRate.value;
                _overviewData.com = _inputPort;
                _overviewData.baud_rate = parseInt(_inputBoadRate);
                console.log('LayoutConfigModalContent _okFunc:', _overviewData);
                //todo 
                EventProxy.trigger(Constants.Event.Dashboard_Save_Key, 'com');

            }.bind(this);
            let _dispatch = {
                uiName: 'overview configuration',
                data: { title: 'overview configuration' },
                exParams: {
                    content: _modalContent,
                    okFunc: _okFunc
                }
            }
            EventProxy.trigger(Constants.Event.ModalUI_Key, _dispatch);
        }.bind(this));
    }

    render() {
        if (this.state.uiName == Constants.Event.MainUI_Value_Overview) {
            let _overviewData = this.state.data;
            let _text = _overviewData ? _overviewData.com + '|' + _overviewData.baud_rate : '';
            if (AppState.User_Name == 'admin') {
                return (
                    <ul className="nav-header pull-right">
                        <li>
                            <button className="btn btn-square btn-primary" onClick={this.onClickConfigLayoutButton.bind(this, _overviewData)} data-toggle="modal" data-target="#modal-fromleft">
                                <i className="glyphicon glyphicon-cog"></i> {_text}
                            </button>
                        </li>
                    </ul>
                );
            } else {
                return (
                    <ul className="nav-header pull-right">
                        <li>
                            <button className="btn btn-square btn-primary" disabled>
                                <i className="glyphicon glyphicon-cog"></i> {_text}
                            </button>
                        </li>
                    </ul>
                );
            }
        } else if (this.state.uiName == Constants.Event.MainUI_Value_Overview_Detail) {
            let _detailData = this.state.data;
            return (
                <ul className="nav-header pull-right">
                    {/* <li>
                        <button className="btn btn-square btn-danger" onClick={this.onClickFactorySettingsButton.bind(this, _detailData)}>
                            <i className="fa fa-wrench" aria-hidden="true"></i> <span className="hidden-xs hidden-sm">FactorySettings</span></button>
                    </li> */}
                    <li>
                        <button className="btn btn-square btn-primary" onClick={this.onClickUserSettingsButton.bind(this, _detailData)}>
                            <i className="glyphicon glyphicon-cog"></i> <span className="hidden-xs hidden-sm">UserSettings</span></button>
                    </li>
                </ul>
            );
        } else if (this.state.uiName == Constants.Event.MainUI_Value_Overview_Detail_UserSettings) {
            if (AppState.User_Name == 'admin') {
                return (
                    <ul className="nav-header pull-right">
                        <li>
                            <button className="btn btn-square btn-primary" onClick={this.onClickSaveUserSettingsButton} data-toggle="modal" data-target="#modal-fromleft">
                                <i className="fa fa-check"></i> <span>Save</span></button>
                        </li>
                    </ul>
                );
            } else {
                return null;
            } 
        } else if (this.state.uiName == Constants.Event.MainUI_Value_Overview_Detail_FactorySettings) {
            return (
                <ul className="nav-header pull-right">
                    <li>
                        <button className="btn btn-square btn-danger" onClick={this.onClickSaveFactorySettingsButton} data-toggle="modal" data-target="#modal-fromleft">
                            <i className="fa fa-check"></i> <span>Save</span></button>
                    </li>
                </ul>
            );
        } else {
            return null;
        }
    }

}


module.exports = HeaderRightToolbarComponent;