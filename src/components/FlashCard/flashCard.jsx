import React from 'react';
import 'flashCard.scss'


class FlashCard extends React.Component {
  
    constructor() {
      super();
      this.state = {
        showAnswer: false
      }
    }
   
    render() {
      const content = this.state.showAnswer ? this.props.backContent : this.props.frontContent;
      const iconClass = this.state.showAnswer ? 'reply' : 'share';
      const flashCardClass = this.state.showAnswer ? 'back' : '';
      const contentClass = this.state.showAnswer ? 'back' : 'front';
      const actionClass = this.state.showAnswer ? 'active' : '';
  
      return (
        <div 
          className={`flashcard ${flashCardClass}`}
          onClick={() => this.setState({showAnswer: !this.state.showAnswer})}
        >
        <span className='flashcard__counter'>{this.props.flashcardNumber + 1}</span>
          <div 
            className='flashcard__flip-card'
            onClick={ () => {
              this.setState({showAnswer: !this.state.showAnswer});
            }}
          >
  
            <span className={`fa fa-${iconClass}`}/>
          </div>
          <div className={`flashcard__content--${contentClass}`}>
            {content}
          </div>
          <div className={`flashcard__actions ${actionClass}`}>
            <div 
              className='flashcard__prev-button'
              onClick={() => {
                this.props.showPrevFlashcard();
                this.setState({showAnswer: false});
              }}
            >
              Prev
            </div>
            <div 
              className='flashcard__next-button'
              onClick={() => {
                this.props.showNextFlashcard();
                this.setState({showAnswer: false});
              }}
            >
              Next
            </div>
          </div>
        </div>
      );
    }
  }

  export default FlashCard