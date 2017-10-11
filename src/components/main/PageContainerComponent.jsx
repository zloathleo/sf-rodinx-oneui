import React from 'react';

import AlertComponent from './AlertComponent.jsx';
import RealtimeComponent from './RealtimeComponent.jsx';
import SidebarComponent from './SidebarComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import MainComponent from './MainComponent.jsx';
import FootComponent from './FootComponent.jsx';
import ModalComponent from './ModalComponent.jsx';
import ToastrComponent from './ToastrComponent.jsx';

class PageContainerComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <div id="page-container" className="sidebar-l sidebar_close side-scroll header-navbar-fixed">
        <SidebarComponent />
        <HeaderComponent />
        <MainComponent />
        <FootComponent />
        <ModalComponent />
        <AlertComponent />
        <RealtimeComponent />
        {/* <ToastrComponent /> */}
      </div>
    )
  }

}

module.exports = PageContainerComponent;