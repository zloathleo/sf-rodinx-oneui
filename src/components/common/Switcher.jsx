import React from 'react';

class Switcher extends React.Component {

    constructor(props) {
        super(props);
        this.state = { refreshCount: 0 };

        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(_event) {
        let items = this.props.items;
        items[0].selected = !items[0].selected;
        items[1].selected = !items[0].selected;
        this.setState({ refreshCount: (this.state.refreshCount++) });
 
        let func = this.props.valueChangeFunc;
        if (func) {
            func(items[0].selected);
        }

    }

    render() {
        let items = this.props.items;
        let width = this.props.width ? this.props.width : 100;
        if (items[0].selected) {
            return (
                <label className="css-input switch switch-primary" style={{ width: width + 'px' }}>
                    <input type="checkbox" defaultChecked="true" onChange={this.onValueChange} /><span></span> {items[0].display}
                </label>
            )
        } else {
            return (
                <label className="css-input switch switch-primary" style={{ width: width + 'px' }}>
                    <input type="checkbox" onChange={this.onValueChange} /><span></span> {items[1].display}
                </label>
            )
        }

    }
}

module.exports = Switcher;