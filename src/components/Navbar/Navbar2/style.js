import styled, {css} from "styled-components";

const common = css`
    display: 'flex',
    align-items: 'center',
`
const common2 = css`
    display: 'flex',
    align-items: 'center',
`


const NavberWrapper = styled.div`
    width: 100%;
    background-color: #333;
    padding: 0px 50px;
`;

const NavbarContainer = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 100px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    @media(max-width: 1000px){
        hight: 50px;
    }

    @media(max-width: 800px){
        height: 30px;
    }
    @media (max-width: 428px){
        background: yellow;
`;
const Logo = styled.span`
  font-size: 24px;

  @media(max-width: 1000px){
    font-size:18px;
  }
`
const Nav = styled.nav``

const NavItems = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
`
const NavItem = styled.li`
    list-style-type: none;
    font-size: 18px;
`

const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

function getType(props){
    switch(props.type){
        case "primary" : {
            return {
               ' background-color':  'blue',
               'color': 'white',
            }
        }
        case "secondary":
            return{
               backgroundColor: "gray",
            }
        case "success" :{
            return {
               backgroundColor: "#198452",
            }
        }
        case "danger" :{
            return {
               backgroundColor: "#DC3545",
                "color": "#FCFCFC"
            }
        }
        case "warning" :{
            return {
               backgroundColor: "#FFC107",
            }
        }
        case "light" :{
            return {
               backgroundColor: "#F7F8F9",
            }
        }
        case "info" :{
            return {
               backgroundColor: "#0DCAF0",
            }
        }
        case "dark" :{
            return {
               backgroundColor: "#212529",
               "color":"#EDEDED"
            }
        }
        case "link" :{
            return {
               backgroundColor: "white",
               "textDecoration": "underline",
            }
        }


        default: return {};
    }
}

const Btn = styled.button`
    padding: 5px 10px;
    border: none;
    outline: none;
   
    margin-right: ${props => props.mr ? props.mr : '0px'};
    color: ${props => props.rang ? props.rang : ""};
    background-color: ${props => props.bg ? props.bg : ""}   ; 
    :hover {
        transform: scale(0.97)
    }
    :active{
        opacity: 0.7
    } 

    ${getType}

`

export {NavberWrapper, NavbarContainer, Logo, Nav, NavItems, NavItem,NavRight, Btn}



