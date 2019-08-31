import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return <Nav>
        <Link to="/home"><img src='./images/grocery_bag.png' alt='bag-logo'/></Link>
    </Nav>
}

export default Navbar

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;

    img {
        max-height: 10vh;
        width: auto;
    }
`