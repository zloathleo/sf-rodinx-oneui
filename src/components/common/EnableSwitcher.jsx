import Switcher from './Switcher.jsx';

class EnableSwitcher extends Switcher {

    constructor(props) {
        super(props);
        // let _value = this.props.value;//0-1 
        this.props.items = [{ display: 'Enable', value: 1 }, { display: 'Disable', value: 0 }];
    }

    // render() { 
    //     return super.render();
    // }

}

module.exports = EnableSwitcher;