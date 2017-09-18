import React from 'react';

import SidebarComponent from './SidebarComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import MainComponent from './MainComponent.jsx';
import FootComponent from './FootComponent.jsx';
import ModalComponent from './ModalComponent.jsx'

class PageContainerComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="page-container" className="sidebar-l sidebar-o side-scroll header-navbar-fixed">
        <SidebarComponent />
        <HeaderComponent />
        <MainComponent />
        <FootComponent />
        <ModalComponent />
      </div>
    )
  }

}

module.exports = PageContainerComponent;