import React from 'react'
import FriendCard from './FriendCard'
import styled from 'styled-components'
import {players} from "../data/players"

const FriendsContainer = styled.div`
    height: 380px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0px 50px;
    z-index: 0;
`

const FriendCards = () => {
  return (
    <FriendsContainer>
        {players.map(player => (
            <FriendCard name={player.name} status={player.status} game={player.game} currentActivity={player.currentActivity} isFav={player.isFav}/>
        ))}
    </FriendsContainer>
  )
}

export default FriendCards