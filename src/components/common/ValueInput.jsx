import React from 'react';

class ValueInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = { updateCount: 0 };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.value = event.target.value;
        this.setState({ updateCount: this.state.updateCount++ });
    }

    render() {
        return (
            <input className={this.props.className} type="text" value={this.props.value} onChange={this.handleChange} placeholder={this.props.placeholder} />
        );
    }

    value(){
        return this.props.value;
    }
}

module.exports = ValueInput;