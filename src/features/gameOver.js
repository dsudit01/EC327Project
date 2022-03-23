import React from 'react';
import {Popup} from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'


export const GameOver = ({visible, attempts, didWin, correctWord}) => {
    let message;
    didWin ? message = `You got it in ${attempts} tries!!!` : message = `You suck, it was ${correctWord}`




    return (
        <div>
            <Popup
                open = {visible}
                modal={true}
            >
                {message}
            </Popup>
        </div>
    )
}