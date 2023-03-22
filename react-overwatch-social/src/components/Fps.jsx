import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #181818;
    border: 1px solid #fff;
    color: #fff;
    font-size: 0.7rem;
    position: absolute;
    top: 0;
    left: 0;
    padding: 1px 8px;
`

const Fps = () => {
    
    const [fps, setFps] = useState("59")
    // const shuffle = useCallback(() => {
    //     if(fps === "59"){
    //         setFps("60")
    //     } else {
    //         setFps("59")
    //     }
    // }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(fps === "59"){
                setFps("60")
            } else if(fps === "60"){
                setFps("59")
            }
        }, 10)

        return () => clearInterval(intervalId)
    }, [fps])

  return (
    <Container>FPS: {fps}</Container>
  )
}

export default Fps