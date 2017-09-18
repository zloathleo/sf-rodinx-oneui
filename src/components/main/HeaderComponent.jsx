import React from 'react';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header id="header-navbar" className="content-mini content-mini-full">
                <ul className="nav-header pull-right">
                    <li>
                        <button className="btn btn-default" data-toggle="layout" data-action="side_overlay_toggle" type="button">
                            <i className="fa fa-tasks"></i>
                        </button>
                    </li>
                </ul>

                <ul className="nav-header pull-left">
                    {/* 大屏幕不显示 */}
                    <li className="hidden-md hidden-lg">
                        <button className="btn btn-default" data-toggle="layout" data-action="sidebar_toggle" type="button">
                            <i className="fa fa-navicon"></i>
                        </button>
                    </li>
                </ul>
            </header>
        )
    }

}


module.exports = HeaderComponent;