import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Constants from '../../constants/Constants.jsx';
import RefreshUI from '../common/RefreshUI.jsx';
import AlarmService from '../../services/AlarmService.jsx';

class AlarmComponent extends RefreshUI {

    constructor(props) {
        super(props);
        //查询频率
        this.timeOut = 1000 * 10;
        //查询间隔
        this.timeGap = 1000 * 60 * 10;

    }

    getRefreshDataFunc(_callback) {
        let timestamp = Math.round(new Date().getTime() / 1000) - this.timeGap;
        AlarmService.requestGetAlarms('', timestamp, _callback);
    }

    render() {
        let _data = this.state.refreshData;
        let _tableContent = null;
        if (_data && _data.rows) {
            _tableContent = (
                <tbody>
                    {
                        _data.rows.map(function (_row, _index) {
                            return (
                                <tr>
                                    <td className="text-center">{_index + 1}</td>
                                    <td className="text-center">
                                        <span className="label label-danger">{_row.name}</span>
                                    </td>
                                    <td>{_row.timestamp}</td>
                                    <td>{_row.message}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            );
        }

        return (
            <div className="main-content-padding animated bounceIn">
                <Scrollbars renderTrackHorizontal={function () { return <div />; }} renderThumbHorizontal={function () { return <div />; }} style={{ height: Constants.UI.OverviewComponentContentHeight }}>

                    <table className="table table-bordered bg-white">
                        <thead>
                            <tr>
                                <th className="text-center" style={{ width: '50px' }}>#</th>
                                <th className="text-center" style={{ width: '50px' }}>Device</th>
                                <th style={{ width: '50px' }}>Timestamp</th>
                                <th style={{ width: '50%' }}>Message</th> 
                            </tr>
                        </thead>
                        {_tableContent}
                    </table>

                </Scrollbars>
            </div>
        )

    }

}

module.exports = AlarmComponent;