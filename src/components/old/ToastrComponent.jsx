import React from 'react';
import { observer } from 'mobx-react';
  
class ToastrComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <div className="alert alert-info alert-dismissable">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                <h3 className="font-w300 push-15">Information</h3>
                <p>Information <a className="alert-link" href="javascript:void(0)">message</a>!</p>
            </div>
        )
    }

}

module.exports = ToastrComponent;