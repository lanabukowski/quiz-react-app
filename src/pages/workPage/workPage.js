import React, {Component} from 'react';
import './workPage.css';

import service from '../../service/service';

export default class WorkPage extends Component {
    constructor(props) {
        super(props);
        this.state = {ques:1,score:0,isLoaded: false,items:[], showAnswer:false};

        this.service = new service();

        this.handleAnswer = this.handleAnswer.bind(this);
    }

    handleAnswer(correct) {
        if (!this.state.showAnswer) {
            if(correct) {
                this.setState({score: this.state.score + 10})
            }
            this.setState({showAnswer: !this.state.showAnswer})
            this.timerID = setTimeout(
                () => this.changeQuestion(),
                1000
            );
        }
    }

    changeQuestion() {
        clearInterval(this.timerID);
        if (this.state.items.length !== this.state.ques) {
            this.setState({ques: this.state.ques+1, showAnswer: !this.state.showAnswer})
        } else {
            this.props.handleClick('finish', this.state.score);
        }
    }

    takeMeQuestions() {
        this.service.getQuestions()
            .then(
                (res) => {
                    this.setState({isLoaded: true, items: res})
                }
            )
            .catch((error) => console.log('error', error));
    } 

    componentDidMount() {
        this.takeMeQuestions();
    }
    
    render() {
        if (this.state.isLoaded) {
            const {ques, items, score} = this.state;
            return (
                <div className='screen'>
                    <div className='header'>
                    <div className='question'>
                        <div className='question-title'>Question</div>
                        <div className='question-block'>{ques}</div>
                    </div>
                    <div className='score'>
                        <div className='score-title'>Score</div>
                        <div className='score-block'>{score}</div>
                    </div>
                    </div>
                    <div className='content'>
                        <h1>{items[ques - 1].question}</h1>
                        <ul>
                            {items[ques - 1].answers.map((item) => {
                                const colorAnswer = item.correct ? "green" : "red";
                                return (<li className={this.state.showAnswer ? colorAnswer : ""} onClick={() => this.handleAnswer(item.correct)} key={item.key}>{item.value}</li>) 
                            }
                            )}
                        </ul>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}