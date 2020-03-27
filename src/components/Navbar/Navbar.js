import React from 'react'
import styled from 'styled-components'

const NavbarWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80px;
    background-color: #1B212C;
    color: white;
`

const Navbar = () => {
    return (
        <NavbarWrap>
            <div>Nav</div>
        </NavbarWrap>
    )
}

export default Navbar
