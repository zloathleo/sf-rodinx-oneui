import Switcher from './Switcher.jsx';

class EnableSwitcher extends Switcher {

    componentWillMount() {
        let _value = this.props.value;//0-1 
        if (_value == 0) {
            this.props.items = [{ display: 'Enable' }, { display: 'Disable', selected: true }];
        } else {
            this.props.items = [{ display: 'Enable', selected: true }, { display: 'Disable' }];
        }
    }

    // render() { 
    //     return super.render();
    // }

}

module.exports = EnableSwitcher;