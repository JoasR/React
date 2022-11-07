import React from "react";
import memesData from "../data/memesData"

function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1ur9b0.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes;
        let randomNumber = Math.round(Math.random() * memesArray.length);
        const url = (memesArray[randomNumber].url)
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
                    <input placeholder="Top Text" className="meme-form-input" type="text" />
                    <input placeholder="Bottom Text" className="meme-form-input" type="text" />
                    <button className="meme-form-button" onClick={getMemeImage}>Get a new meme Image 🖼️</button>
                </div>
                <img className="meme-image" src={meme.randomImage} alt="" />
        </main>
    )
}
export default Meme