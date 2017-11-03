import React from 'react';

import Constants from '../../constants/Constants.jsx';
import EventProxy from '../../utils/EventProxy.jsx';
import EventDriveUI from '../common/EventDriveUI.jsx';

class ModalComponent extends EventDriveUI {

    constructor(props) {
        super(props);
        this.uiEventKey = Constants.Event.ModalUI_Key;
        this.onSubmit = this.onSubmit.bind(this);
        this.onClose = this.onClose.bind(this);
        // this._lastConetnt = undefined;
    }


    onClose() {
        // this.setState({ uiName: undefined, data: undefined, _exParams: undefined });
    }

    onSubmit() {
        let _exParams = this.state.exParams;
        if (_exParams && _exParams.okFunc) {
            _exParams.okFunc();
        }
    }

    render() {
        let _data = this.state.data;

        let _exParams = this.state.exParams;

        let _content = _exParams ? _exParams.content : null; 

        return (
            <div className="modal fade" id="modal-fromleft" tabindex="-1" role="dialog" aria-hidden="true" style={{ display: 'none' }}>
                <div className="modal-dialog modal-dialog-fromleft">
                    <div className="modal-content">
                        <div className="block block-themed block-transparent remove-margin-b">
                            <div className="block-header bg-primary-dark">
                                <ul className="block-options">
                                    <li>
                                        <button data-dismiss="modal" type="button" onClick={this.onClose}><i className="si si-close"></i></button>
                                    </li>
                                </ul>
                                <h3 className="block-title">{_data ? _data.title : ''}</h3>
                            </div>
                            <div className="block-content">
                                {_content}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-sm btn-default" type="button" data-dismiss="modal" onClick={this.onClose}>Close</button>
                            <button className="btn btn-sm btn-primary" type="button" data-dismiss="modal" onClick={this.onSubmit}><i className="fa fa-check"></i> Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}


module.exports = ModalComponent;