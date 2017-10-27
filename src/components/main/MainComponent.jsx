import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Constants from '../../constants/Constants.jsx';
import EventDriveUI from '../common/EventDriveUI.jsx';

//component
import HeaderComponent from './HeaderComponent.jsx';
import OverviewComponent from '../overview/OverviewComponent.jsx';
import DeviceDetailComponent from '../overview/DeviceDetailComponent.jsx';
import DeviceUserSettingsComponent from '../overview/DeviceUserSettingsComponent.jsx';
import DeviceFactorySettingsComponent from '../overview/DeviceFactorySettingsComponent.jsx';

class MainContent extends EventDriveUI {

  constructor(props) {
    super(props);
    this.uiEventKey = Constants.Event.MainUI_Key;
    this.uiDefaultValue = Constants.Event.MainUI_Value_Overview;
  }

  render() { 
    if (this.state.uiName == Constants.Event.MainUI_Value_Overview) {
      return <OverviewComponent />;
    } else if (this.state.uiName == Constants.Event.MainUI_Value_Overview_Detail) {
      return <DeviceDetailComponent data={this.state.data} />;
    } else if (this.state.uiName == Constants.Event.MainUI_Value_Overview_Detail_UserSettings) {
      return <DeviceUserSettingsComponent data={this.state.data} />;
    } else if (this.state.uiName == Constants.Event.MainUI_Value_Overview_Detail_FactorySettings) {
      return <DeviceFactorySettingsComponent data={this.state.data} />;
    } else {
      return null;
    }
  }
}

class MainComponent extends React.Component {

  render() {
    return (
      <main>
        <HeaderComponent />
        <MainContent /> 
      </main>
    )
  }
}

module.exports = MainComponent;