import React from "react";
import styled from "styled-components";
import "./Dropdown.css"
import { Link } from "react-router-dom";
import menuData from "../Data/menuData";
import { FaTimes } from "react-icons/fa";
import { useStateValue } from "../LoginComponents/StateProvider";
const DropdownContainer = styled.div`
  position : fixed;
  z-index: 999;
  width: 50%;
  height:100%;
  background:white;
  display: grid;
  top:0;
  left:0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '1': '0' )};
  top: ${({isOpen}) => (isOpen ? '0':'-100%')};
`

const Icon = styled.div`
position: absolute;
top: 1.2rem;
left: 1.1rem;
background: transparent;
font-size: 1.5rem;
cursor: pointer;
outline: none
`

const CloseIcon = styled(FaTimes)`
color:black;
`
const DropdownWrapper= styled.div``
const DropdownMenu = styled.div`
display: ;
grid-template-column: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 5rem;
margin-top:5rem;
@media screen and (max-width: 480px){
    grid-template-rows: repeat(4,60px);
}
`
const DropdownLink = styled(Link)`
 display:flex;
 align-item: left;
 height:30px;
 border-bottom:1px solid black ;
 border-left:white;
 border-right:white;
 justify-content: left;
 color:black;
 font-size: 1rem;
 text-decoration:none;
 color:black;
 padding-top:0.3rem;
 padding-left:1rem;
 cursor:pointer;
 transition: 0.2s ease-in-out;
 &:hover{
     color: black;
     
 }
`

function Dropdown({isOpen,toggle}){
    const [ {mylist,user} ] = useStateValue()
  return (
      <div>
          <DropdownContainer isOpen ={isOpen} onClick = {toggle}>
              <Icon onClick = {toggle}>
                  <CloseIcon/>
              </Icon>
              <DropdownWrapper>
                  <DropdownMenu>
                          <DropdownLink to = "/home">
                              Home
                          </DropdownLink>
                          <DropdownLink to = "/mylist">
                              Tv List
                              <p>{mylist.length}</p>
                          </DropdownLink>
                          <DropdownLink to = "/Latest">
                             Movies
                          </DropdownLink>
                  </DropdownMenu>
              </DropdownWrapper>
          </DropdownContainer>
      </div>
  )
}
export default Dropdown;