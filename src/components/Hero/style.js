import styled from "styled-components"
import {FaPlay} from "react-icons/fa"

const Wrapper = styled.header`
    width:100%;
`

const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: auto;
    padding: 0 80px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`
Container.Title = styled.h1`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 90px;
    line-height: 133px;
    color: #FFFFFF;
`

Container.Subtitle = styled.h3`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 74px;
    color: #FFFFFF;
`

Container.Description = styled.p`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;

    max-width: 514px;
`

Container.Btns = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
Container.PlayIcon = styled(FaPlay)`
    width: 17px;
    height: 17px;
`



export {Container,Wrapper};