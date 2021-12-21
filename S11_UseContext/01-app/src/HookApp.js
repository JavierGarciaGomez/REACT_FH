import React from 'react'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
import { SimpleForm } from './components/02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks'
import { FocusScreen } from './components/04-useRef/FocusScreen'
import { RealExampleRef } from './components/04-useRef/RealExampleRef'
import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect'
import { CallbackHook } from './components/06-memos/CallbackHook'
import { MemoHook } from './components/06-memos/MemoHook'
import { Memorize } from './components/06-memos/Memorize'
import { Padre } from './components/07-tarea/Padre'



export const HookApp = () => {
    return (
        <div>
            <h1>Hola, mundo</h1>
            <CounterApp/>
            <CounterWithCustomHook/>
            <SimpleForm/>
            <FormWithCustomHook/>
            <MultipleCustomHooks/>
            <FocusScreen/>
            <RealExampleRef/>
            <LayoutEffect/>
            <Memorize/>
            <MemoHook/>
            <CallbackHook/>
            <Padre/>
        </div>
    )
}
