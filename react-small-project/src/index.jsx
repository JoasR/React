import React from "react"
import ReactDOM from "react-dom/client"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import "./style.css"

function App(){
    return(
        <div className="container">
            <NavBar />
            <Main />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <App />
)