import React from 'react';

import Constants from '../../constants/Constants.jsx';
import EventProxy from '../../utils/EventProxy.jsx';
import EventDriveUI from '../common/EventDriveUI.jsx';

import OverviewService from '../../services/OverviewService.jsx';

class HeaderBreadcrumbComponent extends EventDriveUI {

    constructor(props) {
        super(props);
        this.uiEventKey = Constants.Event.MainUI_Key;
        this.uiDefaultValue = Constants.Event.MainUI_Value_Overview;
    }

    onClickModuleLink() {
        EventProxy.trigger(Constants.Event.MainUI_Key, {
            uiName: Constants.Event.MainUI_Value_Overview
        });
    }

    //detail
    onClickLevel1Link(_deviceName) { 
        EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Visible });
        OverviewService.requestDeviceDetail(_deviceName, function (json) {
            EventProxy.trigger(Constants.Event.MainUI_Key, {
                uiName: Constants.Event.MainUI_Value_Overview_Detail,
                data: json
            });
            EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Invisible });
        }.bind(this));
    }

    render() {
        if (this.state.uiName == Constants.Event.MainUI_Value_Overview) {
            return (
                <ol className="breadcrumb push-10-t">
                    <li>{Constants.Event.MainUI_Value_Overview}</li>
                </ol>
            );
        } else if (this.state.uiName == Constants.Event.MainUI_Value_Overview_Detail) {
            //detail 
            let _detailData = this.state.data;
            return (
                <ol className="breadcrumb push-10-t">
                    <li><a className="link-effect" href="#" onClick={this.onClickModuleLink.bind(this)}>OVERVIEW</a></li>
                    <li>{_detailData.name}</li>
                </ol>
            );
        } else {
            //settings
            let _settingData = this.state.data;
            return (
                <ol className="breadcrumb push-10-t">
                    <li><a className="link-effect" href="#" onClick={this.onClickModuleLink.bind(this)}>OVERVIEW</a></li>
                    <li><a className="link-effect" href="#" onClick={this.onClickLevel1Link.bind(this, _settingData.name)}>{_settingData.name}</a></li>
                    <li>{this.state.uiName}</li>
                </ol>
            );
        }
    }

}


module.exports = HeaderBreadcrumbComponent;