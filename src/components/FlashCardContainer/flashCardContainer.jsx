import React from 'react';
import FlashCard from '../FlashCard/flashCard'
import './flashCardContainer.scss'
import _ from "lodash"

class FlashCardContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        flashcards: ([{
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
      let flashCardsLength = this.state.flashcards.length
      if ((this.state.flashCardNumber + 1) !== flashCardsLength) {
        this.setState({flashCardNumber: this.state.flashCardNumber += 1});
      }
    }
    
    showPrevFlashcard() {
      if (this.state.flashCardNumber !== 0) {
        this.setState({flashCardNumber: this.state.flashCardNumber -= 1});
      }
    }
    
    // Temp: Add a card to the state variable Array
    setFlashcard(flashcard) {
      const newFlashcards = this.state.flashcards.push(flashcard);
      this.setState({flashcards: newFlashcards});
    }
    
    generateDots() {
        const times = this.state.flashcards.length;
        let arr = [];
        _.times(times).forEach((num) => {
          const dotClass = num  === this.state.flashCardNumber ? 'active' : '';
          console.log(dotClass)
          arr.push(
            <span 
              className={`flashcard-container__dot fa fa-circle ${dotClass}`}
              onClick={() => this.setState({flashCardNumber: num})}
            />
          )
        });
        return arr;
      }

    generateFlashcards() {
      const flashcards = this.state.flashcards;
      // Add axios call here to rtv data.
        const flashcardsList = flashcards.map((flashcard, index) => {
            return (
                <FlashCard 
                key={index}
                frontContent={flashcard.word}
                backContent={flashcard.description}
                showNextFlashcard={this.boundShowNextFlashcard}
                showPrevFlashcard = {this.boundShowPrevFlashcard}
                flashCardNumber={this.state.flashCardNumber}
                />
                );
            })   
      console.log('*** FlashCardList: ', flashcardsList)
      return(flashcardsList[this.state.flashCardNumber]); 
    }
    render() {
      return (
        <div className='wrapper'>
            Some Header Text
            <div className='content-wrapper'>
                <div>
                    <span 
                        className='flashcard-container__icon  fa fa-plus' 
                        onClick={() => {
                            this.setState({showModal: !this.state.showModal});
                        }}
                        />

                    {this.generateFlashcards()}

                    <div className='flashcard-container__dots-wrapper'>
                        {this.generateDots()}

                    </div>
                </div>
            </div>
        </div>  
     );
    }
  }

  export default FlashCardContainer