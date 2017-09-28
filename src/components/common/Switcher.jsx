import React from 'react';

class Switcher extends React.Component {

    constructor(props) {
        super(props);
        this.state = { refreshCount: 0 };
        this.onValueChange = this.onValueChange.bind(this);
        this.value = this.value.bind(this);
    }

    onValueChange(_event) {
        let items = this.props.items;
        let value = this.props.value;
        if (items[0].value == value) {
            this.props.value = items[1].value;
        } else {
            this.props.value = items[0].value;
        }
        this.setState({ refreshCount: (this.state.refreshCount++) });

        let func = this.props.valueChangeFunc;
        if (func) {
            func(this.props.value);
        }
    }

    value() {
        return this.props.value;
    }

    render() {
        let items = this.props.items;//{display->value}
        let value = this.props.value;
        let width = this.props.width ? this.props.width : 100;
        if (items[0].value == value) {
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