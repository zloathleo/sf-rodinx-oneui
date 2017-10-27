import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import EventProxy from '../../utils/EventProxy.jsx';
import Constants from '../../constants/Constants.jsx';
import VersionInfo from './factorysettings/VersionInfo.jsx';
import CheckEnables from './factorysettings/CheckEnables.jsx';
import ChannelsInfo from './factorysettings/ChannelsInfo.jsx';

class DeviceFactorySettingsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.save.bind(this);
    }

    componentWillMount() {
        EventProxy.on(Constants.Event.FactorySettingsUI_Save_Key, (_value) => {
            if (_value) {
                this.save();
            }
        });
    }

    componentWillUnmount() {
        EventProxy.off(Constants.Event.FactorySettingsUI_Save_Key);
    }

    save() {
       
    }

    render() {
        let _data = this.props.data;
        return (
            <div className="main-content-padding animated bounceIn">
                <Scrollbars renderTrackHorizontal={function () { return <div />; }} renderThumbHorizontal={function () { return <div />; }} style={{ height: Constants.UI.OverviewComponentContentHeight }}>
                    <div className='main-detail-padding-margin'>
                        <VersionInfo data={_data.version_info} />
                        <CheckEnables data={_data.check_enables} />
                        <ChannelsInfo data={_data} />
                    </div>
                </Scrollbars>
            </div>
        )
    }

}

module.exports = DeviceFactorySettingsComponent;