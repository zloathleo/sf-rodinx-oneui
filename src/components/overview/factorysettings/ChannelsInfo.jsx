import React from 'react';

class FourSettingItem extends React.Component {
    render() {
        return (
            <tr>
                <td className="text-right setting-table-item-label-padding">{this.props.label}</td>
                <td className="text-center setting-table-item-padding" ><input className="form-control input-sm font-ds-digital-s20" type="text" defaultValue={this.props.v1} /></td>
                <td className="text-center setting-table-item-padding" ><input className="form-control input-sm font-ds-digital-s20" type="text" defaultValue={this.props.v2} /></td>
                <td className="text-center setting-table-item-padding" ><input className="form-control input-sm font-ds-digital-s20" type="text" defaultValue={this.props.v3} /></td>
                <td className="text-center setting-table-item-padding" ><input className="form-control input-sm font-ds-digital-s20" type="text" defaultValue={this.props.v4} /></td>
            </tr>
        )

    }
}

class TwoSettingItem extends React.Component {
    render() {
        return (
            <tr>
                <td className="text-right setting-table-item-label-padding" style={{ width: '25%' }}>{this.props.label1}</td>
                <td className="text-center setting-table-item-padding" style={{ width: '25%' }}><input className="form-control input-sm font-ds-digital-s20" type="text" defaultValue={this.props.v1} /></td>
                <td className="text-right setting-table-item-label-padding" style={{ width: '25%' }}>{this.props.label2}</td>
                <td className="text-center setting-table-item-padding" style={{ width: '25%' }} ><input className="form-control input-sm font-ds-digital-s20" type="text" defaultValue={this.props.v2} /></td>

            </tr>
        )

    }
}

class TwoSettingNullItem extends React.Component {
    render() {
        return (
            <tr className="hidden-xs">
                <td style={{ width: '25%' }}></td>
                <td className="text-center setting-table-item-padding" style={{ width: '25%' }}><input style={{ visibility: 'hidden' }} className="form-control input-sm font-ds-digital-s20" type="text" /></td>
                <td style={{ width: '25%' }}>{'\u00A0'}</td>
                <td style={{ width: '25%' }}>{'\u00A0'}</td>
            </tr>
        )

    }
}

class ACPanel extends React.Component {

    render() {
        let _data = this.props.data;
        return (
            <div className="bs-callout bs-callout-primary">
                <h4>AC</h4>
                <table className="table table-striped table-vcenter table-header-bg" style={{ marginBottom: '10px' }}>
                    <tbody>
                        <TwoSettingItem label1={"l_band"} label2={"r_band"} v1={_data.l_band} v2={_data.r_band} />
                        <TwoSettingItem label1={"l_weight"} label2={"r_weight"} v1={_data.l_weight} v2={_data.r_weight} />
                        <TwoSettingItem label1={"l_d"} label2={"r_d"} v1={_data.l_d} v2={_data.r_d} />
                        <TwoSettingItem label1={"weight_pL"} label2={"weight_pH"} v1={_data.weight_pl} v2={_data.weight_ph} />
                        <TwoSettingItem label1={"line_turn"} label2={"line_param"} v1={_data.line_turn} v2={_data.line_param} />
                    </tbody>
                </table>

                <table className="table table-striped table-vcenter table-header-bg" style={{ marginBottom: 0 }}>
                    <tbody>
                        <FourSettingItem label={"weight.N"} v1={_data.weight_n[0]} v2={_data.weight_n[1]} v3={_data.weight_n[2]} v4={_data.weight_n[3]} />
                        <FourSettingItem label={"weight.L"} v1={_data.weight_l[0]} v2={_data.weight_l[1]} v3={_data.weight_l[2]} v4={_data.weight_l[3]} />
                        <FourSettingItem label={"weight.H"} v1={_data.weight_h[0]} v2={_data.weight_h[1]} v3={_data.weight_h[2]} v4={_data.weight_h[3]} />
                    </tbody>
                </table>
            </div>
        )
    }
}

class DCPanel extends React.Component {

    render() {
        let _data = this.props.data;
        return (
            <div className="bs-callout bs-callout-success">
                <h4>DC</h4>
                <table className="table table-striped table-vcenter table-header-bg" style={{ marginBottom: '10px' }}>
                    <tbody>
                        <TwoSettingNullItem />
                        <TwoSettingNullItem />
                        <TwoSettingNullItem />
                        <TwoSettingItem label1={"weight_pL"} label2={"weight_pH"} v1={_data.weight_pl} v2={_data.weight_ph} />
                        <TwoSettingNullItem />
                    </tbody>
                </table>

                <table className="table table-striped table-vcenter table-header-bg" style={{ marginBottom: 0 }}>
                    <tbody>
                        <FourSettingItem label={"weight.N"} v1={_data.weight_n[0]} v2={_data.weight_n[1]} v3={_data.weight_n[2]} v4={_data.weight_n[3]} />
                        <FourSettingItem label={"weight.L"} v1={_data.weight_l[0]} v2={_data.weight_l[1]} v3={_data.weight_l[2]} v4={_data.weight_l[3]} />
                        <FourSettingItem label={"weight.H"} v1={_data.weight_h[0]} v2={_data.weight_h[1]} v3={_data.weight_h[2]} v4={_data.weight_h[3]} />
                    </tbody>
                </table>
            </div>
        )
    }
}

class FrequencyPanel extends React.Component {

    render() {
        let _data = this.props.data;
        return (
            <div className="bs-callout bs-callout-warning">
                <h4>Frequency</h4>
                <table className="table table-striped table-vcenter table-header-bg" style={{ marginBottom: '10px' }}>
                    <tbody>
                        <TwoSettingItem label1={"raise_v1"} label2={"drop_v1"} v1={_data.raise_v1} v2={_data.drop_v1} />
                        <TwoSettingItem label1={"raise_v2"} label2={"drop_v2"} v1={_data.raise_v2} v2={_data.drop_v2} />
                        <TwoSettingItem label1={"raise_num"} label2={"drop_num"} v1={_data.raise_num} v2={_data.drop_num} />
                        <TwoSettingItem label1={"weight_pL"} label2={"weight_pH"} v1={_data.weight_pl} v2={_data.weight_ph} />
                        <TwoSettingNullItem />
                    </tbody>
                </table>

                <table className="table table-striped table-vcenter table-header-bg" style={{ marginBottom: 0 }}>
                    <tbody>
                        <FourSettingItem label={"weight.N"} v1={_data.weight_n[0]} v2={_data.weight_n[1]} v3={_data.weight_n[2]} v4={_data.weight_n[3]} />
                        <FourSettingItem label={"weight.L"} v1={_data.weight_l[0]} v2={_data.weight_l[1]} v3={_data.weight_l[2]} v4={_data.weight_l[3]} />
                        <FourSettingItem label={"weight.H"} v1={_data.weight_h[0]} v2={_data.weight_h[1]} v3={_data.weight_h[2]} v4={_data.weight_h[3]} />
                    </tbody>
                </table>
            </div>
        )
    }
}

class FilePanel extends React.Component {

    render() {
        let _data = this.props.data;
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-4 factory-settings-file-info-panel">
                    <ACPanel data={_data.ac} />
                </div>
                <div className="col-xs-12 col-sm-4 factory-settings-file-info-panel">
                    <DCPanel data={_data.dc} />
                </div>
                <div className="col-xs-12 col-sm-4 factory-settings-file-info-panel">
                    <FrequencyPanel data={_data.frequency} />
                </div>
            </div>
        )
    }

}


class Channel extends React.Component {

    render() {
        let _data = this.props.data;
        return (
            <div className="row" style={{ margin: '1px' }}>
                <div className="col-xs-6" style={{ display: 'flex', alignItems: 'center', padding: '0px 10px 0px 10px' }}>
                    <span>ao_4mA_Value</span>  <input className="form-control input-sm push-5-l font-ds-digital-s20" type="text" size="6" defaultValue={_data.ao_value.ao_4ma_value} />
                </div>
                <div className="col-xs-6" style={{ display: 'flex', alignItems: 'center', padding: '0px 10px 0px 10px' }}>
                    <span>ao_20mA_Value</span>  <input className="form-control input-sm push-5-l font-ds-digital-s20" type="text" size="6" defaultValue={_data.ao_value.ao_20ma_value} />
                </div>

                <div className="col-xs-12 main-content-padding">
                    <div className="block end-block-margin-bottom">

                        <ul className="nav nav-pills" data-toggle="tabs">
                            <li className="active">
                                <a data-toggle="tab" href="#filea">File A</a>
                            </li>
                            <li className="">
                                <a data-toggle="tab" href="#fileb">File B</a>
                            </li>
                        </ul>
                        <div className="block-content tab-content" style={{ padding: '0px 12px' }}>
                            <div className="tab-pane active" id="filea">
                                <FilePanel data={_data.filea} />
                            </div>
                            <div className="tab-pane" id="fileb">
                                <FilePanel data={_data.fileb} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

class ChannelsInfo extends React.Component {

    render() {
        let _data = this.props.data;
        return (
            <div id="faq1" className="panel-group">
                <div className="panel panel-default">
                    <div className="panel-heading" data-toggle="collapse" data-parent="#faq1" href="#faq1_q1" aria-expanded="true">
                        <h3 className="panel-title">
                            CH1
                        </h3>
                    </div>
                    <div id="faq1_q1" className="panel-collapse collapse in" aria-expanded="true">
                        <div className="panel-body">
                            <Channel data={_data.ch1} />
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" data-toggle="collapse" data-parent="#faq1" href="#faq1_q2" aria-expanded="false">
                        <h3 className="panel-title">
                            CH2
                          </h3>
                    </div>
                    <div id="faq1_q2" className="panel-collapse collapse" aria-expanded="false" style={{ height: '0px' }}>
                        <div className="panel-body">
                            <Channel data={_data.ch2} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

module.exports = ChannelsInfo;