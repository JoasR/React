import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
        <div className='random-shape-bot'></div>
        <div className='random-shape-top'></div>
        <App />
    </div>
)
