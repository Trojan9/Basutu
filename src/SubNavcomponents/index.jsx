import React from 'react'
import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink } from "./SubNavbarElement"; 

function SubNavbar() {
    return (
        <div>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to = "/Continuewatching">
                        CONTINUE WATCHING
                    </NavLink>
                    <NavLink to = "/">
                        MY LIST
                    </NavLink>
                    <NavLink to = "/movies">
                       LATEST
                    </NavLink>

                </NavMenu>
            </Nav>
        </div>
    )
}

export default SubNavbar;
