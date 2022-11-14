import React from "react"
import Main from "./components/Main"
import Navbar from "./components/NavBar"

function App(){
    const [isDarkMode, setIsDarkMode] = React.useState(false)

    function ChangeMode(){
        setIsDarkMode(prevState => !prevState)
    }

    return(
        <div className="container">
            <Navbar 
                darkMode = {isDarkMode} 
                toggleDarkMode={ChangeMode}
            />
            <Main darkMode = {isDarkMode} />
        </div>
    )
}
export default App