import React, {Component} from 'react';
import './startPage.css';

export default class StartPage extends Component {
    render() {
        return (
            <div className='container'>
                <div className='wrap'>
                    <h1 className='title'>Quiz App</h1>
                    <button className='btn-start' onClick={()=> this.props.handleClick('work')}>Start</button>
                </div>
            </div>
        )
    }
}