import React from 'react'

const Login = () => {
    return (
        <div className='login'>
            <img className='front-page-splash' src='./images/belart84-unsplash.jpg' alt='belart84-unsplash-fruit' />
            <div className='login-block'>
                <h1>Grocery Basket</h1>
            </div>
            <style jsx>{`
                img.front-page-splash {
                    margin: 0 50vw 0 10vw;
                    max-height: 100vh;
                }
            `}
            </style>
        </div>)
}

export default Login