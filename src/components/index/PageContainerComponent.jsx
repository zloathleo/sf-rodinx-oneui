import React from 'react';

import MainComponent from '../main/MainComponent.jsx';
import FootComponent from './FootComponent.jsx';
import VirtualComponent from './VirtualComponent.jsx';

class PageContainerComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    /**
     * main -> Content LoadingComponent
     */
    return (
      <div className="sidebar-l sidebar_close side-scroll header-navbar-fixed">
        <MainComponent />
        <FootComponent />
        <VirtualComponent />
      </div>
    )
  }

}

module.exports = PageContainerComponent;