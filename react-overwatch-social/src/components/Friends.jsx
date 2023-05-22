import React from 'react'
import styled, { keyframes } from 'styled-components'
import { PersonAdd, ExpandMore } from "@mui/icons-material"
import { useState } from 'react'


const Container = styled.div`
    margin: 0px 50px;    
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

const OnlineFriends = styled.h1`
    font-size: 1.5rem;
    font-weight: 800;
    word-spacing: -5px;
`

const BlueNumber = styled.span`
    color: #30D5C8;
`

const AddButtonsContainer = styled.div`
    display: flex;
`

const glow = keyframes`
  0% {
    border-color: transparent;
    box-shadow: 0 0 0 0 white;
  }
  50% {
    border-color: white;
    box-shadow: 0 0 10px 3px white;
  }
  100% {
    border-color: transparent;
    box-shadow: 0 0 0 0 white;
  }
`

const AddFriendsButton = styled.div`
    background-color: #EE7600;
    display: flex;
    padding: 8px 20px;
    border: 2px solid transparent;
    border-radius: 3px;
    transition: transform ease-in 1;
    align-items: center;

    &:hover{
        animation: ${glow} 2.5s ease-in-out infinite;
        transform: scale(1.03)
    }
`

const AddFriendsButtonText = styled.h3`
    color: #fff;
    padding-left: 12px;
`

const DropDown = styled.div`
    font-family: 'Oxanium', cursive;
    display: flex;
    align-items: center;
    background-color: #fff;
    margin-left: 8px;
    width: 300px;
    padding: 0px 8px;
    font-weight: 700;
    font-size: 1.3rem;
    position: relative;
    border-radius: 3px;
`

const DropDownMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0px;
    background-color: #fff;
    transform: translate(0, 3px);
    border: 2px solid #171717;
    border-radius: 3px;
    width: 100%;
    padding: 5px;
    z-index: 1;
`

const DropDownItem = styled.li`
    display: flex;
    padding: 10px 0px;
    align-items: center;
    width: 100%;
    background-color: ${props => props.selected === props.status ? "#171717" : "inherit"};
    color: ${props => props.selected === props.status ? "#fff" : "inherit"}
`

const Circle = styled.span`
    margin-left: 10px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-right: 12px;
`

const StatusText = styled.p`
    
`


const Friends = () => {
    const onlineOptions = 
    [
        {status: "ONLINE", statusColor: "green"}, 
        {status: "BUSY", statusColor: "red"}, 
        {status: "AWAY", statusColor: "orange"}, 
        {status: "APPEAR OFFLINE", statusColor: "grey"}
    ]

    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const [selectedStatus, setSelectedStatus] = useState({status: "ONLINE", statusColor: "green"})

    const toggleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen)
    }

    const handleOptionClick = (option) => {
        setSelectedStatus(option)
    }

  return (
    <Container>
        <TitleContainer>
            <OnlineFriends>
                <BlueNumber>0</BlueNumber> PLAYING OVERWATCH / <BlueNumber>22</BlueNumber> FRIENDS ONLINE
            </OnlineFriends>
            <AddButtonsContainer>
                <AddFriendsButton>
                    <PersonAdd style={{color: "#fff"}}/>
                    <AddFriendsButtonText>ADD FRIEND</AddFriendsButtonText>
                </AddFriendsButton>
                <DropDown onClick={toggleDropDown}>
                    {isDropDownOpen && (
                        <DropDownMenu>
                            {onlineOptions.map(option => (
                                <DropDownItem selected={selectedStatus.status} status={option.status} onClick={() => handleOptionClick(option)} key={option.status}>
                                    <Circle color={option.statusColor}></Circle>
                                    <StatusText>{option.status}</StatusText>
                                </DropDownItem>
                            ))}
                        </DropDownMenu>
                    )}
                    <DropDownItem selected={selectedStatus}>
                        <Circle color={selectedStatus.statusColor}></Circle>
                        <StatusText>{selectedStatus.status}</StatusText>
                        <ExpandMore style={{marginLeft: "auto"}}/>
                    </DropDownItem>
                </DropDown>
            </AddButtonsContainer>
        </TitleContainer>
    </Container>
  )
}

export default Friends