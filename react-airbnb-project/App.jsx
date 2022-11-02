import React from "react"
import Card from "./src/components/Card"
import Hero from "./src/components/Hero"
import Navbar from "./src/components/Navbar"
import cardData from "./src/data"

function App(){
    const cardElement = cardData.map(data => { 
        return <Card 
            key={data.id}
            // img={data.coverImg}
            // rating={data.stats.rating}
            // reviewCount={data.stats.reviewCount}
            // location={data.location}
            // title={data.title}
            // price={data.price}
            // openSpots={data.openSpots}
            //
            //OR
            //
            //{...data}
            //OR
            data = {data}
        />
    })
    
   
    return(
        <>
            <Navbar />
            <Hero />
            <div className="cards-list">
                {cardElement}
            </div>
        </>
    )
  }

  export default App