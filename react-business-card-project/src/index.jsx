import React from 'react'
import ReactDOM from 'react-dom/client'
import './stylesheets/index.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'


function App(){
  return(
    <div className='card-container'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)

