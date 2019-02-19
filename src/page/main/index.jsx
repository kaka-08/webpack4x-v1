import React from 'react';
import Test from './test';
import { hot } from 'react-hot-loader';
import './index.scss';
import './index.css';

class Main extends React.Component{

    render(){
        return <div>
            <h1 className="title">this is index.jsx page 1</h1>
            <Test />
        </div>
    }

}

export default hot(module)(Main)