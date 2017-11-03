import React from 'react';

import Constants from '../../constants/Constants.jsx';
import Utils from '../../utils/Utils.jsx';
import EventProxy from '../../utils/EventProxy.jsx';
import AppState from '../../states/AppState.jsx';

import ValueInput from '../common/ValueInput.jsx';

import DeviceChangeModalContent from '../modal/DeviceChangeModalContent.jsx';
import OverviewService from '../../services/OverviewService.jsx';

class AddressSetModalContent extends React.Component {
    render() {
        let _itemData = this.props.data;
        let _addr = _itemData.addr;
        if (_addr == -1) {
            _addr = '';
        }
        return (
            <div>
                <div className="form-group">
                    <label className="col-xs-12" >Address</label>
                    <ValueInput ref={(_ref) => this.inputAddress = _ref} className="form-control" value={_addr} type="number" name="address" placeholder="Enter the Device Address.." />
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
        this.onClickRemoveItem = this.onClickRemoveItem.bind(this);
    }

    //设置地址
    onClickSetAddressButton(_item, _event) {
        if (AppState.User_Name == 'admin') {
            let _modalContent = <AddressSetModalContent ref={(_ref) => this.addressSetModalContent = _ref} data={_item} />;
 
            let _okFunc = function () {

                //todo
                OverviewService.requestUpdateDeviceAddress(_item.name, this.addressSetModalContent.inputAddress.value(), '', '', function (json) {
                    console.log('AddressSetModalContent ok');
                    EventProxy.trigger(Constants.Event.Dashboard_Save_Key, 'addr');

                });

            }.bind(this);
            let _dispatch = {
                uiName: 'AddressSetModalContent',
                data: { title: 'Device ' + _item.name + ' Settings' },
                exParams: {
                    content: _modalContent,
                    okFunc: _okFunc
                }
            }
            EventProxy.trigger(Constants.Event.ModalUI_Key, _dispatch);
        }
    }

    onClickRemoveItem(_item, _event) {
        this.props.parent.clickRemoveItemButton(_item);
    }

    //设备变化
    clickItemChanged(_item, _event) {
        //
        console.log('clickItemChanged:', _item);
        if (AppState.User_Name == 'admin') {
            let _modalContent = <DeviceChangeModalContent ref={(_ref) => this.deviceChangeModalContent = _ref} />;
            let _okFunc = function () {

                //同步设备设置
                let _choose = this.deviceChangeModalContent.inputChoose.value();

                OverviewService.requestSynchronizeDevice(_item.name, _choose);

                // OverviewService.requestUpdateDeviceAddress(_item.name, this.addressSetModalContent.inputAddress.value, '', '', function (json) {
                //     console.log('AddressSetModalContent ok');
                //     EventProxy.trigger(Constants.Event.Dashboard_Save_Key, 'addr');
                // });

            }.bind(this);
            let _dispatch = {
                uiName: 'DeviceChangeModalContent',
                data: { title: 'Device Changed' },
                exParams: {
                    content: _modalContent,
                    okFunc: _okFunc
                }
            }
            EventProxy.trigger(Constants.Event.ModalUI_Key, _dispatch);
        }
    }

    //进入detail
    onClickItem(_item) {
        if (_item.addr != -1) {
            EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Visible });
            OverviewService.requestDeviceDetail(_item.name, function (json) {

                EventProxy.trigger(Constants.Event.MainUI_Key, {
                    uiName: Constants.Event.MainUI_Value_Overview_Detail,
                    data: json
                });

                EventProxy.trigger(Constants.Event.LoadUI_Key, { uiName: Constants.Event.LoadUI_Value_Invisible });
            }.bind(this));
        } else {
            this.onClickSetAddressButton(_item, undefined);
        }
    }

    render() {
        let _item = this.props.data;
        let _refreshData = this.props.refreshData;
        let _isLast = this.props.isLast;
        let _deviceName = _item.name;

        let color1 = '#9E9E9E';
        let color2 = '#9E9E9E';

        //按钮
        let optionsHtml = null;
        if (_refreshData) {
            let _deleteIconHtml = null;
            let _changeIconHtml = null;

            let _device = _refreshData.devices[_deviceName];

            let _isDeviceChange = false;
            if (_item.addr == -1) {
                //未设地址 
            } else {
                if (_device) {
                    let _status_dex = _device.status;
                    let _status_values = Utils.parseState(_status_dex);
                    color1 = Utils.renderCh1Color(_status_values);
                    color2 = Utils.renderCh2Color(_status_values);
                    _isDeviceChange = Utils.isDeviceChange(_status_values);
                }
            }

            if (AppState.User_Name == 'admin') {
                if (_isLast) {
                    //删除按钮
                    _deleteIconHtml = <li> <button type="button" onClick={this.onClickRemoveItem.bind(this, _item)} data-toggle="modal" data-target="#modal-fromleft" ><i className="glyphicon glyphicon-remove"></i></button> </li>
                }
                //硬件发生变化
                if (_isDeviceChange) {
                    _changeIconHtml = <li> <a href='#' className="label" onClick={this.clickItemChanged.bind(this, _item)} data-toggle="modal" data-target="#modal-fromleft" style={{ backgroundColor: 'red', color: '#fff' }}>changed</a></li>
                }
            } else {
                //硬件发生变化
                if (_isDeviceChange) {
                    _changeIconHtml = <li> <span href='#' className="label" style={{ backgroundColor: 'red' }}>changed</span>  </li>
                }
            }

            optionsHtml = (
                <ul className="block-options">
                    {_changeIconHtml}
                    {_deleteIconHtml}
                </ul>
            )
        }



        //未设地址 
        let _row = <div className="row">
            <div className="col-xs-6" style={{ padding: '0', textAlign: 'center' }}>
                <i className="glyphicon glyphicon-fire" style={{ fontSize: '1.6em', color: color1 }}></i>
                <div className="font-w400" style={{ paddingLeft: '3px' }}>CH1</div>
            </div>
            <div className="col-xs-6" style={{ padding: '0', textAlign: 'center' }}>
                <i className="glyphicon glyphicon-fire" style={{ fontSize: '1.6em', color: color2 }}></i>
                <div className="font-w400" style={{ paddingLeft: '3px' }}>CH2</div>
            </div>
        </div>

        let _content = null;
        if (AppState.User_Name == 'admin') {
            if (_item.addr == -1) {
                _content = <div className="block-content" style={{ margin: '1px', padding: '8px 20px 5px', cursor: 'pointer' }} data-toggle="modal" data-target="#modal-fromleft" onClick={this.onClickItem.bind(this, _item)}>
                    {_row}
                </div>
            } else {
                _content = <div className="block-content" style={{ margin: '1px', padding: '8px 20px 5px', cursor: 'pointer' }} onClick={this.onClickItem.bind(this, _item)}>
                    {_row}
                </div>
            }
        } else {
            if (_item.addr == -1) {
                _content = <div className="block-content" style={{ margin: '1px', padding: '8px 20px 5px', cursor: 'pointer' }}>
                    {_row}
                </div>
            } else {
                _content = <div className="block-content" style={{ margin: '1px', padding: '8px 20px 5px', cursor: 'pointer' }} onClick={this.onClickItem.bind(this, _item)}>
                    {_row}
                </div>
            }
        }

        let _titleContent = null;
        if (AppState.User_Name == 'admin') {
            _titleContent = (<a className="link-effect" href="#" data-toggle="modal" data-target="#modal-fromleft" onClick={this.onClickSetAddressButton.bind(this, _item)}>
                <span className="block-title">{_item.name}</span>
                <span className="block-title">-{_item.addr == -1 ? 'NA' : _item.addr}</span>
            </a>)
        } else {
            _titleContent = (<a className="link-effect" href="#">
                <span className="block-title">{_item.name}</span>
                <span className="block-title">-{_item.addr == -1 ? 'NA' : _item.addr}</span>
            </a>)
        }

        return (<div className="col-xs-6 col-sm-2 main-overview-item-padding">
            <a className="block block-link-hover3 block-bordered" style={{ marginBottom: '0px' }}>
                <div className="block-header bg-gray-lighter" style={{ margin: '1px', padding: '10px 10px 10px 15px' }}>
                    {optionsHtml}
                    {_titleContent}
                </div>
                {
                    _content
                }
            </a>
        </div>)
    }

}

module.exports = ItemComponent;