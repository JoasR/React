import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #171717;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: center;
    padding: 5px;
    border-radius: 4px;
    display: inline-block;
    height: 55px;
`

const List = styled.li`
    display: flex;
`

const ListItem = styled.ul`
    background-color: ${props => props.active ? "#30D5C8" : "none"};
    color: ${props => props.active ? "#000" : "inherent"};
    padding: 10px 25px;
    border-radius: 2px;
    margin-left: 3px;
    border: 2px solid transparent;

    &:hover{
        border: ${props => props.active ? "" : "2px solid #30D5C8"} ;
        background-color: ${props => props.active ? "" : "#045c5a"};
    }
`

const Navbar = () => {
  return (
    <Container>
        <List>
            <ListItem active>FRIENDS</ListItem>
            <ListItem>GROUPS</ListItem>
            <ListItem>LAST MATCH</ListItem>
            <ListItem>RECENT PLAYERS</ListItem>
        </List>
    </Container>
  )
}

export default Navbar