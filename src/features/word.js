import './letter.css'
import {Letter} from "./letter";
import {letterStatusCodes} from "./constants";
import {updateKeyboard} from "./keyboard";

export const Word = ({word, correctWord}) => {
   // const [guessLetterCounts, setGuessCounts] = useState({});

    //If no word there don't return anything
    if (!word) {
        return ('')
    }


    const letters = word.toUpperCase().split('');

    const correctLetterCounts = {};
    for (let i = 0; i<correctWord.length; i++) {
        if (correctLetterCounts[correctWord[i]]) {
            correctLetterCounts[correctWord[i]] += 1;
        } else {
            correctLetterCounts[correctWord[i]] = 1;
        }
    }


    //setStatus returns the color of the letter based on its correctness in the correct word
    //If there is no letter present, return 'empty'
    //If the letter is not in the correct word, return 'wrong'
    //If a letter is in the word and not in the correct spot, return 'almost'
    //If a letter is in the word and in the correct spot, return 'correct'
    //leterstatuscodes are found in constants.js

    function setStatus(letter, correctWord, index, guess) {
        if (!letter) {
            return letterStatusCodes["empty"];
        } else if (letter === correctWord[index]) {
            updateKeyboard(letter, letterStatusCodes["correct"]);
            return letterStatusCodes["correct"];
        } else if (correctWord.includes(letter)) {
            let preCount = 0;
            let postCount = 0;
            for (let i = 0; i<index; i++) {
                if (guess[i] === letter) {
                    preCount++;
                }
            }
            for (let j = index+1; j<guess.length; j++) {
                if (guess[j] === letter) {
                    postCount++;
                }
            }


            if (correctLetterCounts[letter] <= preCount) {
                updateKeyboard(letter, letterStatusCodes["wrong"]);
                return letterStatusCodes["wrong"];
            }


            // else if (correctLetterCounts[letter] <= postCount) {
            //     updateKeyboard(letter, letterStatusCodes["wrong"]);
            //     return letterStatusCodes["wrong"];
            // }

            // if (correctLetterCounts[letter] <= postCount) {
            //     updateKeyboard(letter, letterStatusCodes["wrong"]);
            //     return letterStatusCodes["wrong"];
            // }


            updateKeyboard(letter, letterStatusCodes["almost"]);
            return letterStatusCodes["almost"];
        }
        updateKeyboard(letter, letterStatusCodes["wrong"]);
        return letterStatusCodes["wrong"];

    }



    return (
        //returns five letters that make up the word and pass the letter and status through to each Letter const
        <div class='word'>
            <Letter
                letter={letters[0]}
                status={setStatus(letters[0], correctWord,0,letters)}
            >

            </Letter>
            <Letter
                letter={letters[1]}
                status={setStatus(letters[1], correctWord,1,letters)}
            >

            </Letter>
            <Letter
                letter={letters[2]}
                status={setStatus(letters[2], correctWord,2,letters)}
            >

            </Letter>
            <Letter
                letter={letters[3]}
                status={setStatus(letters[3], correctWord,3,letters)}
            >

            </Letter>
            <Letter
                letter={letters[4]}
                status={setStatus(letters[4], correctWord,4,letters)}
            >

            </Letter>
        </div>
    )
}