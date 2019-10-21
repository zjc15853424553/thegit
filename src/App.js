import React from 'react';
//引入其他核心组件
import {NavLink} from 'react-router-dom'
//引入组件
import './App.css';
import Router from './router/public'
import Index from './router/index'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            msg:false
        }
    }

    render() {
        return(
            <div className="App">
                <Router routes={Index}></Router>
            </div>
        )
    }
}
export default App;
