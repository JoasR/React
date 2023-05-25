import React from 'react'
import styled from 'styled-components'
import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';

const ArrowsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const PaginationText = styled.p`
    color: #000;
    font-weight: 800;
`

const FriendsArrowsPag = () => {
  return (
    <ArrowsContainer>
        <KeyboardArrowLeft style={{color:"rgba(0, 0, 0, 0.3)", border: "1px solid #f5f5f5", height: "30px", marginRight: "7px"}}/>
        <PaginationText>1/8</PaginationText>
        <KeyboardArrowRight style={{backgroundColor: "#f5f5f5", height: "30px", marginLeft: "7px"}}/>
    </ArrowsContainer>
  )
}

export default FriendsArrowsPag