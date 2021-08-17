import React from 'react'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'

export const HookApp = () => {
    return (
        <div>
            <h1>Hola, mundo</h1>
            <CounterApp/>
            <CounterWithCustomHook/>
        </div>
    )
}
