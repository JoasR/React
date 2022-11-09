import React from "react";
import memesData from "../data/memesData"

function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1ur9b0.jpg"
    });
    const [allMemes, setAllMemes] = React.useState([])
    
    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //     .then(response => response.json())
    //     .then(data => setAllMemes(data.data.memes))
    // }, [])

    //same as below here, except this is how to use asynce in useEffect()

    React.useEffect(() => {
        async function getMemes(){
            const response =  await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json();
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    /** 
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing (the useeffect below does not need to 
    return a clean up function, so it returns nothing). If we make
    it an async function, it automatically returns a promise instead
    of a function or nothing. Therefore, if you want to use async 
    operations inde of useEffect, you need to define the function
    seperately inside of the callback function, as seen above:
    */

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: type === "checked" ? checked : value
            }
        })
    }

    function getMemeImage(){
        let randomNumber = Math.round(Math.random() * allMemes.length);
        const url = (allMemes[randomNumber].url)
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
    }

    return(
        <main className="meme-container">
                <div className="meme-form">
                    <input name="topText" onChange={handleChange} value={meme.topText} placeholder="Top Text" className="meme-form-input" type="text" />
                    <input name="bottomText" onChange={handleChange} value={meme.bottomText} placeholder="Bottom Text" className="meme-form-input" type="text" />
                    <button className="meme-form-button" onClick={getMemeImage}>Get a new meme Image 🖼️</button>
                </div>
                <div className="meme">
                    <img className="meme-image" src={meme.randomImage} alt="" />
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bot">{meme.bottomText}</h2>
                </div>
        </main>
    )
}
export default Meme