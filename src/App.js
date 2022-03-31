import logo from './logo.svg';
import './App.css';
import {ListOfWords} from "./features/listofWords";
import {useState} from "react";
import {GameOver} from "./features/gameOver";
import {Keyboard} from "./features/keyboard";



function App({correctWord, dictionary}) {
    const [words, updateWords] = useState({
        wordArray: []
    });
    const [guesses, updateGuesses] = useState(0);

    function getGuess() {
        return document.getElementById('userInput').value;
    }


    function onCheck() {
        let guess = getGuess();
        if (!guess || !(dictionary.includes(guess.toLowerCase()))) {
            alert('Not a valid word')
        } else if (guess.length < 5) {
            alert('Too short')
        } else {
            updateGuesses(guesses + 1)
            updateWords(prevState => ({
                wordArray: [...prevState.wordArray, guess]
            }))
            if (guess.toUpperCase() === correctWord.toUpperCase()) {
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
            console.log(words)

        }
    }

    // function onInputChange(event) {
    //     currentGuess = event.target.value;
    // }

    function onKeyDown(event) {
        if (event.key === 'Enter') {
            onCheck()
        }
    }

    const [endGamePopupVisibility, changeEndGamePopupVisibility] = useState(false);
    const [checkButtonEnabled, changeCheckButtonEnabled] = useState(true);
    const [playerWin, setPlayerWin] = useState(false)

    function onVirtualKeyboardClick (key) {
        console.log(key)
        let currentInput = document.getElementById('userInput').value;
        let currentLength = currentInput.length;
        if (key === 'ENTER') {
            onCheck();
        } else if (key === 'DEL') {
            document.getElementById('userInput').value = currentInput.substr(0,currentLength-1);
        } else {
            if (currentLength < 5){
                document.getElementById('userInput').value = document.getElementById('userInput').value + key;
            }

        }

    }


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
                        type="text"
                        disabled={!checkButtonEnabled}
                        id='userInput'
                        size='large'
                        maxLength={5}
                        onKeyDown={onKeyDown}
                    >
                    </input>
                    <button className="check" onClick={onCheck}>
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
            <Keyboard
                changeInputFunction={onVirtualKeyboardClick}>
            </Keyboard>
        </div>

    );
}

export default App;
