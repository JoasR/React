import React from "react";
import NavBar from "./components/NavBar";
import TravelCard from "./components/TravelCard";
import travelData from "./data"

function App(){
  const travelElement = travelData.map(data => {
    return <TravelCard 
      key={data.id}
      data={data}  
    />
  })


  return(
    <div>
      <NavBar />
      {travelElement}
    </div>
  )
}
export default App