import React from 'react';
import { observer } from 'mobx-react';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';

import HeaderComponent from './HeaderComponent.jsx';
import OverviewComponent from '../overview/OverviewComponent.jsx';

@observer
class MainContent extends React.Component {
  render() {
    if (StateManager.appState.activeMainModule == Constants.Values.Main_Module_Overview) {
      return (
        <OverviewComponent />
      )
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