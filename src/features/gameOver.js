import React from 'react';
import {Popup} from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './letter.css'

//GameOver is a popup that occurs after the game has ended
export const GameOver = ({visible, attempts, didWin, correctWord}) => {
    let message;
    //didWin is a flag that marks if the user has won the game or not
    didWin ? message = `You got ${correctWord} in ${attempts} tries!!!` : message = `You suck, it was ${correctWord}`


    return (
        <div>
            <Popup
                open = {visible}
                modal={true}
            >
                <span> {message} </span>

            </Popup>
        </div>
    )
}