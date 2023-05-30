import React from "react";
import {FilterType} from "./App"

type NewComponentType = {
    money: MoneyType[]
    callback: (name: FilterType) => void
}

type MoneyType = {
    banknote:string
    nominal:number
    number:string
}

export const NewComponent = (props:NewComponentType) => {
    return (
        <div>
            <ul>
                {props.money.map((objectFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objectFromMoneyArr.banknote}</span>
                            <span> {objectFromMoneyArr.nominal}</span>
                            <span> {objectFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: '50px'}}>
                <button onClick={() => props.callback('all')}>all</button>
                <button onClick={() => props.callback('ruble')}>rubles</button>
                <button onClick={() => props.callback('dollar')}>dollars</button>
            </div>
        </div>
    )
}