import React from 'react';

import Switcher from '../common/Switcher.jsx'

class DeviceChangeModalContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="block block-themed">
                <div className="block-content block-content-full block-content-narrow">
                    <Switcher ref={(_ref) => this.inputChoose = _ref} style={{ width: '100%' }} value={'m'} items={[{ display: 'Use New Device Settings', value: 'd' }, { display: 'Use Old Device Settings', value: 'm' }]} />
                </div>
            </div>
        )
    }

}

module.exports = DeviceChangeModalContent;