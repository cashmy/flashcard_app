import React from 'react';
import FlashCard from './FlashCard/flashCard'
import 'flashCardContainer.scss'

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
          word: 'Bluegrass',
          description: 'Music like Earl Scruggs.',
        }
      ]),
        flashCardNumber: 0
      };
      this.boundShowPrevFlashcard = this.showPrevFlashcard.bind(this);
      this.boundShowNextFlashcard = this.showNextFlashcard.bind(this);
    }
    
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

          {this.generateFlashcards()}

        </div>
     );
    }
  }

  export default FlashCardContainer