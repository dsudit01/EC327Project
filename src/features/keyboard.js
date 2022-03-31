import './keyboard.css'

export function updateKeyboard(letter, statusColor) {
    for (let key of document.getElementsByClassName("keyboard-button")) {
        if (key.textContent.toUpperCase() === letter) {
            if (key.style.backgroundColor==='green' || (key.style.backgroundColor==='yellow' && statusColor !== 'green')) {
                return;
            } else {
                key.style.backgroundColor = statusColor;
            }
        }
    }
}



export const Keyboard = ({changeInputFunction}) => {

    return (
        <div id="keyboard-cont">
            <div className="first-row">
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>q</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>w</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>e</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>r</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>t</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>y</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>u</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>i</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>o</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>p</button>
            </div>
            <div className="second-row">
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>a</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>s</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>d</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>f</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>g</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>h</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>j</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>k</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>l</button>
            </div>
            <div className="third-row">
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>Del</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>z</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>x</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>c</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>v</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>b</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>n</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>m</button>
                <button className="keyboard-button" onClick={e => changeInputFunction(e.target.innerText)}>Enter</button>
            </div>
        </div>
    )
}