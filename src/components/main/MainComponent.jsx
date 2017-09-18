import React from 'react';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';

import LoadingComponent from './LoadingComponent.jsx';
import OverviewComponent from '../overview/OverviewComponent.jsx';

class Content extends React.Component {
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

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <main id="main-container">
        <div className="content" style={{ padding: '0px 0px' }}>
          <Content />
          <LoadingComponent />
        </div>
      </main>
    )
  }

}


module.exports = MainComponent;