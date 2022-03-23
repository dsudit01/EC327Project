import {Word} from "./word";

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