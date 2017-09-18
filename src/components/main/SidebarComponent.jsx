import React from 'react';

class SidebarComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav id="sidebar">
                <div id="sidebar-scroll">
                    <div className="sidebar-content">
                        <div className="side-header side-content bg-white-op">
                            <span className="h4 font-w700 text-white">RodinX</span>
                        </div>

                        <div className="side-content">
                            <ul className="nav-main">
                                <li>
                                    <a className="active" href="#"><i className="glyphicon glyphicon-home"></i>
                                        <span className="sidebar-mini-hide">OVERVIEW</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="active" href="#"><i className="glyphicon glyphicon-info-sign"></i>
                                        <span className="sidebar-mini-hide">ALARM</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

}


module.exports = SidebarComponent;