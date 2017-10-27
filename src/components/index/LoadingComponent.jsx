import React from 'react';

import Constants from '../../constants/Constants.jsx';
import EventDriveUI from '../common/EventDriveUI.jsx';

class LoadingComponent extends EventDriveUI {

    constructor(props) {
        super(props);
        this.uiEventKey = Constants.Event.LoadUI_Key;
        this.uiDefaultValue = Constants.Event.LoadUI_Value_Visible;
    }

    render() { 
        if (this.state.uiName == Constants.Event.LoadUI_Value_Visible) {
            return (
                <div className="row modal-backdrop fade in" style={{ height: '100%' }}>
                    <div className="col-xs-12 col-sm-12 text-center" style={{ top: '40%' }}>
                        <i className="fa fa-3x fa-asterisk fa-spin"></i>
                    </div>

                </div>
            );
        } else if (this.state.uiName == Constants.Event.LoadUI_Value_Invisible) {
            return null;
        }
    }

}

module.exports = LoadingComponent;