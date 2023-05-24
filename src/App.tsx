import React, {useState} from 'react';
import './App.css';
import {MouseEvent} from 'react';
import {Button} from "./components/Button";


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

    /*const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const Button3Foo = () => {
        console.log('Im stupid button')
    }*/

    //let a = 1
    let[a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandler2 = () => {
        setA(0)
        console.log(a)
    }

    return (
        <div>
            {/*<button onClick={(event)=>{console.log("Hello")}}>MyYoutubeChanel-1</button>*/}
            {/*<button onClick={myFirstSubscriber}>MyYoutubeChanel-1</button>*/}
            {/*<button onClick={() => onClickHandler('Dima')}>MyYoutubeChanel-1</button>
            <button onClick={() => onClickHandler('Ivan')}>MyYoutubeChanel-2</button>*/}

            {/*<Button name={'YouTubeChanel-1'} callBack={() => Button1Foo('Im Dima', 33)}/>
            <Button name={'YouTubeChanel-2'} callBack={() => Button2Foo('Im Mira', 6)}/>
            <Button name={'YouTubeChanel-3'} callBack={Button3Foo}/>*/}

            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler2}>0</button>
        </div>
    );
}

export default App;
