import React from 'react';
import FlashCard from './FlashCard/flashCard'

class FlashCardContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        flashcards: Immutable.fromJS([{
          word: 'Jazz',
          description: 'A type of music of black American origin characterized by improvisation, syncopation, and usually a regular or forceful rhythm, emerging at the beginning of the 20th century.',
        }, {
          word: 'Reggae',
          description: 'Music like Bob Marley, man.',
        }, {
          word: 'Folk',
          description: 'Music like Bob Dylan, man.',
        }
      ]),
        flashCardNumber: 0
      };
    //   this.boundCallback = this.hideCreateCard.bind(this);
    //   this.boundCreateCard = this.setCard.bind(this);
      this.boundShowPrevFlashcard = this.showPrevFlashcard.bind(this);
      this.boundShowNextFlashcard = this.showNextFlashcard.bind(this);
    }
    
    // hideCreateCard() {
    //   this.setState({showModal: false});
    // }
    
    showNextFlashcard() {
      if ((this.state.flashCardNumber + 1) !== this.state.flashcards.size) {
        this.setState({flashCardNumber: this.state.flashCardNumber += 1});
      }
    }
    
    showPrevFlashcard() {
      if (this.state.flashCardNumber !== 0) {
        this.setState({flashCardNumber: this.state.flashCardNumber -= 1});
      }
    }
    
    setFlashcard(flashcard) {
      const newFlashcards = this.state.flashcards.push(flashcard);
      this.setState({flashcards: newFlashcards});
    }
    
    // generateDots() {
    //   const times = this.state.cards.size;
    //   let arr = [];
    //   _.times(times).forEach((num) => {
    //     const dotClass = num  === this.state.cardNumber ? 'active' : '';
    //     arr.push(
    //       <span 
    //         className={`flashcard-container__dot fa fa-circle ${dotClass}`}
    //         onClick={() => this.setState({cardNumber: num})}
    //       />
    //     )
    //   });
    //   return arr;
    // }
    
    generateFlashcards() {
      const flashcards = this.state.flashcards;
       const flashcardsList = flashcards.map((flashcard) => {
          return (
            <FlashCard 
              frontContent={flashcard.get('word')}
              backContent={flashcard.get('description')}
              showNextFlashcard={this.boundShowNextFlashcard}
              showPrevFlashcard = {this.boundShowPrevFlashcard}
              flashCardNumber={this.state.flashCardNumber}
            />
            );
        })
       return(flashcardsList.toJS()[this.state.flashCardNumber]); 
    }
    render() {
      return (
        <div>
          <span 
              className='flashcard-container__icon  fa fa-plus' 
              onClick={() => {
                this.setState({showModal: !this.state.showModal});
              }}
            />
          {/* {this.state.showModal 
            ? <CreateFlashcard 
                onShadowClick={this.boundCallback}
                onCreateFlashcard={this.boundCreateFlashcard}
              /> 
            : ''} */}
          {this.generateFlashcards()}
          {/* <div className='flashcard-container__dots-wrapper'>
            {this.generateDots()}
          </div> */}
        </div>
     );
    }
  }

  export default FlashCardContainer