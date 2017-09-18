import React from 'react'
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { observer } from 'mobx-react';

import DataSim from './mock/DataSim.jsx';

import PageContainerComponent from './components/main/PageContainerComponent.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this._init_config();
    }

    _init_config() {
        DataSim.init();
    }

    render() {
        return (
            <PageContainerComponent />
        )

        // if (StateManager.appState.uiName == 'Login') {
        //     return (
        //         <LoginComponent />
        //     )
        // } else {

        // }
    }

};

ReactDOM.render(<App />, document.body);