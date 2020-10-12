import React, {Component} from 'react';
import './finishPage.css';

export default class FinishPage extends Component {
    render() {
        const {score} = this.props;
        return (
            <div className='wrapper'>
                <div className='score-f'>
                    <div className='score-title-f'>Score</div>
                    <div className='score-block-f'>{score}</div>
                </div>
                <button className='btn-finish' onClick={()=> this.props.handleClick('work')}>Try again</button>
            </div>
        )
    }
}