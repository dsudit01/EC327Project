import './letter.css'

//Each letter in the word must have a color to indicate its "correctness"
//The letter const takes in the letter and its correctness status as inputs
export const Letter = ({letter, status}) => {

    return (
        //div sets class to letter and its background to its status
        <div class='letter' style={{background: status}}>
            {letter}
        </div>
    )
}