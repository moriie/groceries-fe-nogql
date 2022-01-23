import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <FooterWrapper>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <a href="https://github.com/moriie/grocery_list" target="_blank" rel="noreferrer">Github</a>
        </FooterWrapper>
    )
}

export default Footer

//Styles

const FooterWrapper = styled.div`
    position: absolute;
    bottom: 0;
    margin-top: auto;
    margin-bottom: 1vh;

    a {
        border-right: 1px solid black;
        padding-right: .5vw;
        margin-right: .5vw;
    }
    
    a:last-child {
        border-right: none;
    }
    
`