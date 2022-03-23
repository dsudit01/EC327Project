import React from 'react';
import {Popup} from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './letter.css'


export const GameOver = ({visible, attempts, didWin, correctWord}) => {
    let message;
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