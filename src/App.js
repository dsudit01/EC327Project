import logo from './logo.svg';
import './App.css';
import {ListOfWords} from "./features/listofWords";
import {useState} from "react";
import {GameOver} from "./features/gameOver";



function App({correctWord, dictionary}) {
    const [words, updateWords] = useState({
        wordArray: []
    });
    const [guesses, updateGuesses] = useState(0);
    let currentGuess = '';


    function onCheck() {
        console.log(currentGuess)
        if (!currentGuess || !(dictionary.includes(currentGuess))) {
            alert('Not a valid word')
        } else if (currentGuess.length < 5) {
            alert('Too short')
        } else {
            updateGuesses(guesses + 1)
            updateWords(prevState => ({
                wordArray: [...prevState.wordArray, currentGuess]
            }))
            if (currentGuess.toUpperCase() === correctWord.toUpperCase()) {
                changeEndGamePopupVisibility(true)
                changeCheckButtonEnabled(false)
                setPlayerWin(true)
            } else if  (guesses >= 5) {
                changeEndGamePopupVisibility(true)
                changeCheckButtonEnabled(false)
                setPlayerWin(false)
            }
            document.getElementById('userInput').value = '';
            document.getElementById('userInput').focus()


        }
    }

    function onInputChange(event) {
        currentGuess = event.target.value;
    }

    function onKeyDown(event) {
        if (event.key === 'Enter') {
            onCheck()
        }
    }

    const [endGamePopupVisibility, changeEndGamePopupVisibility] = useState(false);
    const [checkButtonEnabled, changeCheckButtonEnabled] = useState(true);
    const [playerWin, setPlayerWin] = useState(false)


    return (
        <div className="App">
            <div>
                Wordle App
            </div>
            <div>
                <ListOfWords words={words.wordArray} correctWord={correctWord}>

                </ListOfWords>

                <div>
                    <input
                        disabled={!checkButtonEnabled}
                        id='userInput'
                        size='lg'
                        onChange={onInputChange}
                        maxLength={5}
                        onKeyDown={onKeyDown}
                    >
                    </input>
                    <button onClick={onCheck}>
                        Check
                    </button>
                </div>

            </div>

            <GameOver
            visible={endGamePopupVisibility}
            attempts={guesses}
            didWin={playerWin}
            correctWord = {correctWord}
            >

            </GameOver>
        </div>
    );
}

export default App;
