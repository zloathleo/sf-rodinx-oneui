import React from 'react';
import VersionInfo from './factorysettings/VersionInfo.jsx';
import CheckEnables from './factorysettings/CheckEnables.jsx';
import ChannelsInfo from './factorysettings/ChannelsInfo.jsx';

class DeviceFactorySettingsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let _data = this.props.data;
        return (
            <div className="row animated bounceIn main-detail-padding-margin">
                <VersionInfo data={_data.version_info} />
                <CheckEnables data={_data.check_enables} />
                <ChannelsInfo data={_data} />
            </div >
        )
    }

}

module.exports = DeviceFactorySettingsComponent;