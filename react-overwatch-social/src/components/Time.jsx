import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    color: rgb(180, 180, 180);
    font-weight: 100;
    font-size: 0.9rem;
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 2px 5px;
`

const Time = () => {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' }));

    useEffect(() => {
        const intervalID = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: true, hour:'numeric', minute: 'numeric' }));
        }, 1000);

        return () => {
        clearInterval(intervalID);
        };
    }, []);

  return (
    <Container>{currentTime}</Container>
  )
}

export default Time