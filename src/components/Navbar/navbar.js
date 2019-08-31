import React from 'react'
import styled from 'styled-components'

const Navbar = () => {

    return <Nav>
        <img src='./images/grocery_bag.png' alt='bag-logo'/>
    </Nav>
}

export default Navbar

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid black;

    img {
        max-height: 10vh;
        width: auto;
    }
`