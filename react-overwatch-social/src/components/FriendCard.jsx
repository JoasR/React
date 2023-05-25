import React, { useState } from 'react'
import styled from 'styled-components'
import heroesOfTheStormImage from "../assets/overwatch social/heroes-of-the-storm.webp"
import overwatchImage from "../assets/overwatch social/overwatch.webp"
import hearthstoneImage from "../assets/overwatch social/hearthstone.webp"
import battle_netImage from "../assets/overwatch social/battle_net.jpg"
import { Star } from '@mui/icons-material'

const FriendCardContainer = styled.div`
    display: flex;
    height: 18%;
    width: 32%;
    background-color: #f5f5f5;
    margin: 3px 10px;
    position: relative;
    border-radius: 3px;
    z-index: 0;

    &:hover{
        transform: scale(1.05);
        border: 3px solid white;
    }
`
const VerticalLine = styled.span`
    position: absolute;
    background-color: ${props => {
        if(props.status === "online"){
            return "green"
        } else if(props.status === "away"){
            return "orange";
        } else if(props.status === "busy"){
            return "red"
        } else {
            return "grey"
        }
    }};
    width: 5px;
    height: 100%;
    border-radius: 3px 0px 0px 3px;
    top: 0;
    left: 0;
`

const GameImage = styled.img`
    margin: 5px 5px 5px 10px;
    border-radius: 3px;
    width: 60px;
    height: 60px;
    display: flex;
    align-self: center;
    justify-self: center;
`

const PlayerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    margin-left: 20px;
`

const PlayerName = styled.h1`
    text-transform: uppercase;
    font-size: 1rem;
`

const CurrentActivity = styled.h3`
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.75);
`

const FriendCard = ({name, status, game, currentActivity, isFav}) => {
    const [isdropDownOpen, setIsDropDownOpen] = useState(false);

    const toggleDropDown = () => {
        setIsDropDownOpen(!isdropDownOpen)
    }

    let gameImage = battle_netImage
    if(game === "hearthstone"){
        gameImage = hearthstoneImage
    } else if(game === "overwatch"){
        gameImage = overwatchImage
    } else if(game === "heroes of the storm"){
        gameImage = heroesOfTheStormImage
    } else {
        gameImage = battle_netImage
    }

  return (
    <FriendCardContainer onClick={toggleDropDown}>
        <VerticalLine status={status}></VerticalLine>
        <GameImage src={gameImage}/>
        <PlayerInfo>
            <PlayerName>{name}</PlayerName>
            <CurrentActivity>{currentActivity}</CurrentActivity>
        </PlayerInfo>
        {isFav && 
            <Star style={{fill: "orange", position: 'absolute', top: "10px", right: "10px"}}/>
        }  
    </FriendCardContainer>
  )
}

export default FriendCard