import './letter.css'
import {Letter} from "./letter";
import {letterStatusCodes} from "./constants";
import {useState} from "react";

export const Word = ({word, correctWord}) => {
    const [guessLetterCounts, setGuessCounts] = useState({});

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
    console.log(correctLetterCounts)




    //////////// Old Set Status doesn't work for double letters
    // function setStatus(letter, correctWord, index) {
    //     if (!letter) {
    //         return letterStatusCodes["empty"];
    //     } else if (letter === correctWord[index]) {
    //         return letterStatusCodes["correct"];
    //     } else if (correctWord.includes(letter)) {
    //         return letterStatusCodes["almost"];
    //     }
    //     return letterStatusCodes["wrong"];
    // }

    function setStatus(letter, correctWord, index, guess) {
        if (!letter) {
            return letterStatusCodes["empty"];
        } else if (letter === correctWord[index]) {
            return letterStatusCodes["correct"];
        } else if (correctWord.includes(letter)) {
            let count = 0;
            for (let i = 0; i<index; i++) {
                if (guess[i] === letter) {
                    count++;
                }
            }

            if (correctLetterCounts[letter] <= count) {
                return letterStatusCodes["wrong"];
            }

            return letterStatusCodes["almost"];
        }
        return letterStatusCodes["wrong"];

    }



    return (
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