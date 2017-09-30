import React from 'react';
import { observer } from 'mobx-react';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';

import LoadingComponent from './LoadingComponent.jsx';
import LoginComponent from '../LoginComponent.jsx';
import OverviewComponent from '../overview/OverviewComponent.jsx';

@observer
class Content extends React.Component {
  render() {
    if (StateManager.appState.activeMainModule == Constants.Values.Main_Module_Overview) {
      return (
        <OverviewComponent />
      )
    } else if (StateManager.appState.activeMainModule == Constants.Values.Main_Module_Login) {
      return (
        <LoginComponent />
      )
    } else {
      return null;
    }
  }
}

class MainComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <main id="main-container">
        <div className="content" style={{ padding: '0px' }}>
          <Content />
          <LoadingComponent />
        </div>
      </main>
    )
  }

}


module.exports = MainComponent;