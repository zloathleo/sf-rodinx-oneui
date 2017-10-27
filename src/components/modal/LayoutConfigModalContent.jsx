import React from 'react';
  
class LayoutConfigModalContent extends React.Component {

    constructor(props) {
        super(props); 
    } 
    
    render() {
        let _ports = this.props.ports.rows;
        let _overviewData = this.props.overviewData;
        return (
            <div>
                <div className="form-group">
                    <label className="col-xs-12">I/O Port</label>
                    <select ref={(_ref) => this.inputPort = _ref} className="form-control" defaultValue={_overviewData.com} size="1">
                        {
                            _ports.map(function (item, i) {
                                return <option value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label className="col-xs-12">Boad Rate</label>
                    <select className="form-control" ref={(_ref) => this.inputBoadRate = _ref} defaultValue={_overviewData.baud_rate} size="1">
                        <option value={9600} >9600</option>
                        <option value={38400} >38400</option>
                    </select>
                </div>
            </div>
        )
    }
}

module.exports = LayoutConfigModalContent;