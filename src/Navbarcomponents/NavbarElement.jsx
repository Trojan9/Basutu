import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background-color: black;
color : white;
height: 85px;
display: flex;
width:100%;
padding: 0.2rem calc((100vw - 1000px) / 2);
padding-left:43px;
z-index: 22;
`; 

export const NavLink = styled(Link)`
color: #808080;
display: flex;
margin-left: 20px;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: white;
}
&:hover{
	text-decoration: underline;
}
@media only screen and (max-width:768px){
	margin:0;
}
`;

export const Bars = styled(FaBars)`
display:none;
color: #808080;
@media  only screen and (max-width: 768px) {
	display: block;
	margin-right:0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
white-space: nowrap; 
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: white;
}
`;
export const Logo = styled.h4`
     display:flex;
    margin-top: auto;
    margin-bottom:auto; 
    
@media only screen and (max-width:768px){
        margin-left: 0px;
        
    }

`




