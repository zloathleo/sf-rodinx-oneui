import React from 'react';

class Switcher extends React.Component {

    constructor(props) {
        super(props);
        this.state = { refreshCount: 0 };
        this.items = undefined;
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(_event) {
        let items = this.props.items ;
        items[0].selected = !items[0].selected;
        items[1].selected = !items[0].selected;
        this.setState({ refreshCount: (this.state.refreshCount++) });

        let func = this.props.valueChangeFunc;
        if (func) {
            func(items[0].selected);
        }

    }

    render() {
        let items = this.props.items ;
        let width = this.props.width ? this.props.width : 100;
        if (items[0].selected) {
            return (
                <div className="btn-group" data-toggle="buttons" onClick={this.onValueChange} style={this.props.style}>
                    <label className="btn btn-square btn-sm btn-primary" style={{ width: '50%' }}>
                        <input type="radio" defaultChecked="true" />{items[0].display}
                    </label>
                    <label className="btn btn-square btn-sm btn-default" style={{ width: '50%' }}>
                        <input type="radio" />{items[1].display}
                    </label>
                </div>

            )
        } else {
            return (
                <div className="btn-group" data-toggle="buttons" onClick={this.onValueChange} style={this.props.style}>
                    <label className="btn btn-square btn-sm btn-default" style={{ width: '50%' }}>
                        <input type="radio" />{items[0].display}
                    </label>
                    <label className="btn btn-square btn-sm btn-primary" style={{ width: '50%' }}>
                        <input type="radio" defaultChecked="true" />{items[1].display}
                    </label>
                </div>
            )
        }

    }
}

module.exports = Switcher;