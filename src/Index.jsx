
import React from 'react'
import ReactDOM from 'react-dom';

import Constants from './constants/Constants.jsx';

import DataSim from './mock/DataSim.jsx';
import PageContainerComponent from './components/index/PageContainerComponent.jsx';

//css
import './assets/css/font.css';
import './assets/css/main.css';
import './assets/css/style.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this._init_config();
    }

    _init_config() {
        if (Constants.Values.Mock) {
            //模拟数据开关
            DataSim.init();
        }
    }

    render() {
        return (
            <PageContainerComponent />
        )
    }

};

ReactDOM.render(<App />, document.body);