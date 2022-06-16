//Antes
/*
import React from 'react'
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import './index.css'
import CounterApp from './CounterApp';



const divRoot = document.querySelector('#root');


//ReactDOM.render(<PrimeraApp saludo="Hola Mundo"/> , divRoot )
ReactDOM.render(<CounterApp value={10}/>, divRoot)*/

import React from 'react';
import {createRoot} from 'react-dom/client';
import CounterApp from './CounterApp';
import './index.css';
//import PrimeraApp from './PrimeraApp';

const divRoot = document.querySelector('#root')
const root = createRoot(divRoot);

//root.render(<PrimeraApp saludo = "Hola soy Samuel"/>)
root.render(<CounterApp />)

