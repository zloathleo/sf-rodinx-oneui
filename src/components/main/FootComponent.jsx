import React from 'react';

class FootComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer id="page-footer" className="content-mini content-mini-full font-s12 bg-white clearfix">
                <div className="pull-right">
                    <span className="js-year-copy">2017</span> © <span>Power By Safefire</span>
                </div>
                <div className="pull-left">

                </div>
            </footer>
        )
    }

}


module.exports = FootComponent;