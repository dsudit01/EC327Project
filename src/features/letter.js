import './letter.css'

export const Letter = ({letter, status}) => {

    return (
        <div class='letter' style={{background: status}}>
            {letter}
        </div>
    )
}