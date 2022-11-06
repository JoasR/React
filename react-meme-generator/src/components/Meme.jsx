import React from "react";
import memesData from "../data/memesData"

function Meme(){
    const [memeImage, setMemeImage] = React.useState("");
    function handleClick(){
        const memesArray = memesData.data.memes;
        let randomNumberInDataRange = Math.round(Math.random() * memesArray.length);
        // const memeUrl = memesArray[randomNumberInDataRange].url
        // console.log(memeUrl);
        
        setMemeImage(memesArray[randomNumberInDataRange].url)
    }
    return(
        <main className="meme-container">
                <div className="meme-form">
                    <input placeholder="Top Text" className="meme-form-input" type="text" />
                    <input placeholder="Bottom Text" className="meme-form-input" type="text" />
                    <button className="meme-form-button" onClick={handleClick}>Get a new meme Image 🖼️</button>
                </div>
                <img className="meme-image" src={memeImage} alt="" />
        </main>
    )
}
export default Meme