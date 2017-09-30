import React from 'react';

import Constants from '../../constants/Constants.jsx';
import StateManager from '../../states/StateManager.jsx';

import OverviewService from '../../services/OverviewService.jsx'

class AddressSetModalContent extends React.Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <label className="col-xs-12" >Address</label>
                    <input ref={(_ref) => this.inputAddress = _ref} className="form-control" type="text" name="address" placeholder="Enter the Device Address.." />
                </div>

                <div className="form-group">
                    <label className="col-xs-12" >CH1 Description</label>
                    <input ref={(_ref) => this.inputCh1Desc = _ref} className="form-control" type="text" name="ch1-description" placeholder="Enter CH1 Description.." />
                </div>

                <div className="form-group">
                    <label className="col-xs-12" >CH2 Description</label>
                    <input ref={(_ref) => this.inputCh2Desc = _ref} className="form-control" type="text" name="ch2-description" placeholder="Enter CH2 Description.." />
                </div>
            </div>
        )
    }
}

class ItemComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    //设置地址
    onClickSetAddressButton(_item, _event) {
        StateManager.modalsState.setModal(_item.name + ' Device Settings', <AddressSetModalContent ref={(_ref) => this.modalContent = _ref} />, function () {
            
            OverviewService.requestUpdateDeviceAddress(_item.name, this.modalContent.inputAddress.value, '', '', function (json) {
                console.log('result:' + json);
            });
        }.bind(this));
    }

    onClickRemoveItem(_item, _event) {
        StateManager.modalsState.setModal('Confirm', <div>Delete Device {_item.name} ?</div>, function () { 
            console.log('Delete ok');
        }.bind(this));
    }

    //进入detail
    onClickItem(_item) {
        StateManager.appState.setMainLoading(true);
        OverviewService.requestDeviceDetail(_item.name, function (json) {
            if (json.status == 0) {
                StateManager.dataState.detailJson = undefined;
                StateManager.appState.setActiveModuleLevel1Name(undefined);
                StateManager.appState.setMainLoading(false);
            } else {
                StateManager.dataState.detailJson = json;
                StateManager.appState.setActiveModuleLevel1Name(Constants.Values.Overview_Level1_Detail);
                StateManager.appState.setMainLoading(false);
            }
        }.bind(this));
    }

    render() {
        let _item = this.props.data;
        return (<div className="col-xs-6 col-sm-2" style={{ padding: '3px' }}>
            <div className="block block-bordered" style={{ marginBottom: '0px' }}>
                <div className="block-header bg-gray-lighter" style={{ margin: '1px', padding: '10px 10px 10px 15px' }}>
                    <ul className="block-options">
                        <li> <button type="button" onClick={this.onClickSetAddressButton.bind(this, _item)} data-toggle="modal" data-target="#modal-fromleft" ><i className="glyphicon glyphicon-link"></i></button> </li>
                        <li> <button type="button" onClick={this.onClickRemoveItem.bind(this, _item)} data-toggle="modal" data-target="#modal-fromleft" ><i className="glyphicon glyphicon-remove"></i></button> </li>
                    </ul>
                    <h3 className="block-title">{_item.name}</h3>
                </div>
                <div className="block-content" style={{ margin: '1px', padding: '8px 20px 5px' }} onClick={this.onClickItem.bind(this, _item)}>
                    <div className="row">
                        <div className="col-xs-6" style={{ padding: '0', textAlign: 'center' }}>
                            <i className="glyphicon glyphicon-fire" style={{ fontSize: '1.6em' }}></i>
                            <div className="font-w400" style={{ paddingLeft: '3px' }}>CH1</div>
                        </div>
                        <div className="col-xs-6" style={{ padding: '0', textAlign: 'center' }}>
                            <i className="glyphicon glyphicon-fire" style={{ fontSize: '1.6em' }}></i>
                            <div className="font-w400" style={{ paddingLeft: '3px' }}>CH2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }

}

module.exports = ItemComponent;