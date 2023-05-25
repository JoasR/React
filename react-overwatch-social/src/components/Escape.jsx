import React from 'react'
import styled from 'styled-components'

const EscapeContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0px 20px 20px 0px;
    display: flex;
    color: #fff;
    text-transform: uppercase;
    align-items: center;
`

const BoxText = styled.div`
    border: 1px solid #f5f5f5;
    padding: 3px;
    margin-right: 5px;
    font-size: 0.8rem;
` 

const Text = styled.p`
    font-weight: 800;
`

const Escape = () => {
  return (
    <EscapeContainer>
        <BoxText>escape</BoxText>
        <Text>back</Text>
    </EscapeContainer>
  )
}

export default Escape