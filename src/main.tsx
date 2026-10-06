import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'

import './index.css'

import GridBackground from './components/gridBackground/GridBackground'

// FONTS 
import '@fontsource/syne/400.css'
import '@fontsource/syne/600.css'
import '@fontsource/syne/700.css'
import '@fontsource/syne/800.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
                <GridBackground backgroundColor='#98c104'/>
                <App />
        </BrowserRouter>
    </React.StrictMode>
)