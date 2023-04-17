import styled from "styled-components"

const getType = (props) => {
    switch(props.type) {
        case "primary" : {
            return {
                background:  "#FA4776",
                "border-radius": "41px",
                padding: "15px 25px"
            }
        }
        case "secondary" : {
            return {
                border: "1px solid white",
                background: "transparent",
                "border-radius": "41px",
                padding: "15px 25px",
                width: "193px",
                height: "56px",

            }
        }
      

        default: {
            return;
        }
    }
}

const Container = styled.button`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    background: none;
    display: flex;
    justify-content: center;
    align-item: center;
    gap: 7px;

    padding: 15px 25px;
    border: none;

    ${getType}
`

export {Container};