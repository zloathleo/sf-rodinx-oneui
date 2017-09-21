import React from 'react';
import { observer } from 'mobx-react';

import StateManager from '../../states/StateManager.jsx';

@observer
class ModalTitle extends React.Component {
    render() {
        return (
            <h3 className="block-title">{StateManager.modalsState.title}</h3>
        )
    }
}

class OKButton extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (StateManager.modalsState.okFunc) {
            StateManager.modalsState.okFunc();
        }
    }
    render() {
        return (
            <button className="btn btn-sm btn-primary" type="button" data-dismiss="modal" onClick={this.onClick}><i className="fa fa-check"></i> Ok</button>
        )
    }
}

@observer
class Content extends React.Component {
    render() {
        if (StateManager.modalsState.content) {
            return StateManager.modalsState.content;
        } else {
            return null;
        }
    }
}

class ModalComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal fade" id="modal-fromleft" tabindex="-1" role="dialog" aria-hidden="true" style={{ display: 'none' }}>
                <div className="modal-dialog modal-dialog-fromleft">
                    <div className="modal-content">
                        <div className="block block-themed block-transparent remove-margin-b">
                            <div className="block-header bg-primary-dark">
                                <ul className="block-options">
                                    <li>
                                        <button data-dismiss="modal" type="button"><i className="si si-close"></i></button>
                                    </li>
                                </ul>
                                <ModalTitle />
                            </div>
                            <div className="block-content">
                                <Content />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-sm btn-default" type="button" data-dismiss="modal">Close</button>
                            <OKButton />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


module.exports = ModalComponent;