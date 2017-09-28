import React from 'react';
import EnableSwitcher from '../../common/EnableSwitcher.jsx';

class Item extends React.Component {

    render() {
        return (
            <div className="col-xs-12 col-sm-3" style={{ display: 'flex', alignItems: 'center', padding: '0px 10px 0px 10px' }}>
                <span style={{ width: '50%' }}>{this.props.label}</span>
                <EnableSwitcher style={{ width: '100%' }} value={this.props.defaultValue} />
            </div>
        )
    }

}

class CheckEnables extends React.Component {

    render() { 
        let _data = this.props.data;
        return (
            <div className="block block-bordered">
                <div className="block-header bg-gray-lighter">
                    <h3 className="block-title">Check Enables</h3>
                </div>
                <div className="block-content" style={{ padding: '10px' }}>

                    <div className="row" style={{ margin: '1px' }}>
                        <Item label='Scan1' defaultValue={_data.scan1} />
                        <Item label='Scan2' defaultValue={_data.scan2} />
                        <Item label='T1' defaultValue={_data.t1} />
                        <Item label='T2' defaultValue={_data.t2} />

                        <Item label='DA1' defaultValue={_data.da1} />
                        <Item label='DA2' defaultValue={_data.da2} />
                        <Item label='FRAM' defaultValue={_data.fram} />
                    </div>

                </div>
            </div>
        )
    }

}

module.exports = CheckEnables;