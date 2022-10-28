import React from "react"
import Card from "./src/components/Card"
import Hero from "./src/components/Hero"
import Navbar from "./src/components/Navbar"

function App(){
    return(
        <>
            <Navbar />
            <Hero />
            <Card />
        </>
    )
  }

  export default App