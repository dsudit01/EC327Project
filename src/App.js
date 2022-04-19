import logo from './logo.svg';
import './App.css';
import {ListOfWords} from "./features/listofWords";
import {useState} from "react";
import {GameOver} from "./features/gameOver";
import {Keyboard} from "./features/keyboard";
import Confetti from 'react-confetti'
import {useWindowSize} from "react-use";


function App({correctWord, dictionary}) {
    //For Confetti
    const {width, height} = useWindowSize();


    //words and guesses keep track of all the users guesses and the amount of tries they have had
    const [words, updateWords] = useState({
        wordArray: []
    });
    const [guesses, updateGuesses] = useState(0);

    function getGuess() {
        return document.getElementById('userInput').value;
    }

    //Checks the user's guess to see if it is a valid guess
    //If the guess is invalid, then an error message will pop up
    //If it is valid, it will add the word to the list of guesses and display on the screen
    //If the guess is correct, then the gameOver popup will occur
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
                document.getElementById("checkButton").style.visibility="hidden";
                document.getElementById("userInput").style.visibility="hidden";
                changeEndGamePopupVisibility(true)
                changeCheckButtonEnabled(false)
                setPlayerWin(true)
            } else if  (guesses >= 5) {
                document.getElementById("checkButton").style.visibility="hidden";
                document.getElementById("userInput").style.visibility="hidden";
                changeEndGamePopupVisibility(true)
                changeCheckButtonEnabled(false)
                setPlayerWin(false)
            }
            //Set the guess input box back to '' and focus the cursor on the input box
            document.getElementById('userInput').value = '';
            document.getElementById('userInput').focus()
        }
    }

    //'Enter' clicked is the same as clicking the check box
    function onKeyDown(event) {
        if (event.key === 'Enter') {
            onCheck()
        }
    }

    const [endGamePopupVisibility, changeEndGamePopupVisibility] = useState(false);
    const [checkButtonEnabled, changeCheckButtonEnabled] = useState(true);
    const [playerWin, setPlayerWin] = useState(false)

    //Allows the virtual keyboard on the screen to be used to type as well
    function onVirtualKeyboardClick (key) {
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
            <div className="Title">
                Wordle App
            </div>
            <div>
                <ListOfWords words={words.wordArray} correctWord={correctWord}>

                </ListOfWords>

                <div className="userInput">
                    <input
                        type="text"
                        disabled={!checkButtonEnabled}
                        id='userInput'
                        size='large'
                        maxLength={5}
                        onKeyDown={onKeyDown}
                    >
                    </input>
                    <button className="check" onClick={onCheck} id="checkButton">
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

            <Confetti
             width={width}
             height={height}
             numberOfPieces={500}
             run={playerWin}
            >
            </Confetti>

        </div>

    );
}

export default App;
