import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Footer from '../Footer'

const Signup = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const handleSignup = () => {
        
        fetch('http://localhost:8000/users/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email
            })
        })
        .then(navigate("/"))
    }

    return (
        <FrontPage>
            <Splash>
                <Image src='./images/belart84-unsplash.jpg' alt='belart84-unsplash-fruit' />
            </Splash>
            <SignupBlock>
                <h1>Grocery Basket</h1>
                <input type='text' value={username} onChange={e=>setUsername(e.target.value)} placeholder='Username' />
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password' />
                <input type='text' value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email' />
                <button onClick={handleSignup}>SIGN UP</button>
                <button onClick={()=>navigate("/")}>BACK</button>
                <Footer/>
            </SignupBlock>
        </FrontPage>)
}

export default Signup


//Styles

const FrontPage = styled.div`
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: row;
`

const Splash = styled.div`
    display: inline-block;
`

const Image = styled.img`
    margin-left: 15vw;
    max-height: 100vh;
`

const SignupBlock = styled.div`
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto auto auto auto;
    height: 50vh;
    border: 1px solid black;

    a {
        color: #63C7EC;

        &:visited {
            color: #63C7EC;
        }
    }

    h1 {
        font-family: 'Fredericka the Great', cursive;
        padding: 0 5vw 2.5vh 5vw;
    }

    input {
        margin: 1vh 0 1vh 0;
        padding-left: 5px;  
        width: 50%;
        height: 5%;
        border: 1px solid black;
        border-radius: 5px;
        background-color: whitesmoke;

        &:focus {
            outline: none;
        }
    }

    button {
        margin: 2vh 0 1vh 0;
        padding-left: 5px;  
        width: 50%;
        height: 5%;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        color: white;
        background-color: #63C7EC;

        &:hover {
            background-color: #5AB0D0;
        }
    }

    div {
        margin-top: 2vh;
        font-size: .75em;
        a {
            text-decoration: none;
            font-weight: bold;
        }
    }

    .signup-footer {
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
    }
`
