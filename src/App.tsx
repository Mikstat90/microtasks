import React from 'react';
import './App.css';
import {MouseEvent} from 'react';


/*const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'},
]*/

function App() {

    /*const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hello, Im DIMA")
    }

    const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hello, Im IVAN")
    }*/

    /*const onClickHandler = (name: string) => {
        console.log(name)
    }*/

    const foo1 = () => {
        console.log(100200)
    }

    const foo2 = (figure: number) => {
        console.log(figure)
    }

    return (
        <div>
            {/*<button onClick={(event)=>{console.log("Hello")}}>MyYoutubeChanel-1</button>*/}
            {/*<button onClick={myFirstSubscriber}>MyYoutubeChanel-1</button>*/}
            {/*<button onClick={() => onClickHandler('Dima')}>MyYoutubeChanel-1</button>
            <button onClick={() => onClickHandler('Ivan')}>MyYoutubeChanel-2</button>*/}

            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>
        </div>
    );
}

export default App;
