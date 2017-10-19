import React from 'react';

class VersionLeftItem extends React.Component {

    render() {
        return (
            <div className="col-xs-6 col-sm-3" style={{ display: 'flex', alignItems: 'center', padding: '0px 5px 0px 0px' }}>
                <span style={{ width: '160%' }}>{this.props.label}</span>
                <input type="text" className="form-control input-sm font-ds-digital-s20" size="6" defaultValue={this.props.defaultValue} />
            </div>
        )
    }

}

class VersionRightItem extends React.Component {
    
        render() {
            return (
                <div className="col-xs-6 col-sm-3" style={{ display: 'flex', alignItems: 'center', padding: '0px 0px 0px 0px' }}>
                    <span style={{ width: '160%' }}>{this.props.label}</span>
                    <input type="text" className="form-control input-sm font-ds-digital-s20" size="6" defaultValue={this.props.defaultValue} />
                </div>
            )
        }
    
    }

class VersionInfo extends React.Component {

    render() {
        let _data = this.props.data;
        return (
            <div className="block block-bordered">
                <div className="block-header bg-gray-lighter">
                    <h3 className="block-title">Version Infomation</h3>
                </div>
                <div className="block-content" style={{ padding: '10px' }}>
                    <div className="row" style={{ margin: '1px' }}>
                        <VersionLeftItem label='AMP Version' defaultValue={_data.amp_version} />
                        <VersionRightItem label='FW Version' defaultValue={_data.fw_version} />
                        <VersionLeftItem label='CH1' defaultValue={_data.ch1} />
                        <VersionRightItem label='CH2' defaultValue={_data.ch2} />
                    </div>
                </div>
            </div>
        )
    }

}

module.exports = VersionInfo;