
import React from 'react'
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';

import Constants from './constants/Constants.jsx';
import StateManager from './states/StateManager.jsx';

import DataSim from './mock/DataSim.jsx';

import PageContainerComponent from './components/main/PageContainerComponent.jsx';
import LoginComponent from './components/LoginComponent.jsx';

//css
import './assets/css/font.css';
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