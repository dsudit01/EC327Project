import './letter.css'
import {Letter} from "./letter";
import {letterStatusCodes} from "./constants";

export const Word = ({word, correctWord}) => {

    if (!word) {
        return ('')
    }

    const letters = word.toUpperCase().split('');

    function setStatus(letter, correctWord, index) {
        if (!letter) {
            return letterStatusCodes["empty"];
        } else if (letter === correctWord[index]) {
            return letterStatusCodes["correct"];
        } else if (correctWord.includes(letter)) {
            return letterStatusCodes["almost"];
        }
        return letterStatusCodes["wrong"];
    }


    return (
        <div class='word'>
            <Letter
                letter={letters[0]}
                status={setStatus(letters[0], correctWord, 0)}
            >

            </Letter>
            <Letter
                letter={letters[1]}
                status={setStatus(letters[1], correctWord, 1)}
            >

            </Letter>
            <Letter
                letter={letters[2]}
                status={setStatus(letters[2], correctWord, 2)}
            >

            </Letter>
            <Letter
                letter={letters[3]}
                status={setStatus(letters[3], correctWord, 3)}
            >

            </Letter>
            <Letter
                letter={letters[4]}
                status={setStatus(letters[4], correctWord, 4)}
            >

            </Letter>
        </div>
    )
}