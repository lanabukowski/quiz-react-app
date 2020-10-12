import React, {Component} from 'react';
import StartPage from '../startPage';
import WorkPage from '../workPage';
import FinishPage from '../finishPage';


export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {page: 'start'}
        this.handleState = this.handleState.bind(this);
    }

    handleState(status, res=0) {
        this.setState({page: status, score: res })
    }

    render() {
       if (this.state.page === 'start') {
        return <StartPage handleClick={this.handleState}/>
       }
       if (this.state.page === 'work') {
        return <WorkPage handleClick={this.handleState}/>
       }
       if (this.state.page === 'finish') {
        return <FinishPage handleClick={this.handleState} score={this.state.score}/>
       }   
    }
}