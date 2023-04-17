import styled from "styled-components"

const Wrapper = styled.header`
    width:100%;
    .slick-slider{
        background: gray;
        padding:20px;
    }
    .slick-track{
        display:flex;
        gap:10px;
    }
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
Container.Card = styled.div`
    width: 182px;
    height: 256px;
    border-radius: 16px;
    border: 1px solid black;
`

Container.Card.Image = styled.img`
    width: 100%;
    height: 100%;
`







export {Wrapper, Container}