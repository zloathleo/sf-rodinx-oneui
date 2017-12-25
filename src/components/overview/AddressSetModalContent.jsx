import React from 'react';

import ValueInput from '../common/ValueInput.jsx';

class AddressSetModalContent extends React.Component {
    render() {
        let _addr = this.props.addr;
        if (!_addr) {
            _addr = 0;
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

module.exports = AddressSetModalContent;