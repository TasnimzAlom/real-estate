import React from 'react'
import styled, {css} from "styled-components/macro";
import {Link} from "react-router-dom";
import { menuData } from '../data/MenuData';
import { RiMenuFill } from 'react-icons/ri';
import { GiPlainCircle } from 'react-icons/gi';



const Nav = styled.nav`
height:60px;
display:flex;
justify-content:space-between;
padding:1rem 2rem;
z-index:100;
position:fixed;
width:100%;
// background:#000;
font-family: 'Cormorant Garamond', serif;

@media screen and (max-width: 768px){
    background:#000; 
    padding:.9rem;
}
`;



const MenuBars = styled(RiMenuFill)`
display:none;

@media screen and (max-width: 768px) {
    display:block;
    color:whitesmoke;
    height:25px;
    width:25px;
    margin:1px 0;
    cursor:pointer;
    
}
`;

const NavLink = css`
color:white;
display:flex;
align-items:center;
padding:1rem;
height:100%;
cursor:pointer;
text-decoration:none;
`

const NavMenu =styled.div`
display:flex;
align-items:center;
margin-right:24px;

@media screen and (max-width: 768px) {
    display:none;
}
`;



const NavMenuLinks= styled(Link)`
${NavLink}
`;

const Logo= styled(Link)`
font-size:1.7rem;
margin:0;
border-bottom:whitesmoke solid 1px;
border-top:whitesmoke solid 1px;


${NavLink}
@media screen and (max-width: 768px) {
    font-size:1rem;
    padding:0;
    
}

`;

const Bead = styled(GiPlainCircle)`
font-size:5px;
color:#fff;
margin:5px;
box-shadow:1px 1px 2px black;

`;



const Navbar = ({toggle}) => {
    return (
        <Nav>
          
           <Logo to="/">ALOM <Bead/>Real estate</Logo>
           
            <MenuBars onClick={toggle}/>
            <NavMenu >
            {menuData.map((item, index)=> (
                <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            ))}
            </NavMenu>
           
            
        </Nav>
    )
}

export default Navbar 
