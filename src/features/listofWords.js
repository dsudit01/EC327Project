import {Word} from "./word";

//Returns a list of the 6 words that the user has guessed
//This takes in the correct word as well as the list of words that have been guessed as inputs
//Each <Word> will then display each word on a separate line with each letter and their appropriate status which are set in "word.js"
export const ListOfWords = ({words, correctWord}) => {
    return (
        <div>
            <Word
                word={words[0]}
                correctWord={correctWord}
            >
            </Word>

            <Word
                word={words[1]}
                correctWord={correctWord}
            >
            </Word>

            <Word
                word={words[2]}
                correctWord={correctWord}
            >
            </Word>

            <Word
                word={words[3]}
                correctWord={correctWord}
            >
            </Word>

            <Word
                word={words[4]}
                correctWord={correctWord}
            >
            </Word>

            <Word
                word={words[5]}
                correctWord={correctWord}
            >
            </Word>
        </div>
    )
}