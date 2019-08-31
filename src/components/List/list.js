import React from 'react'
import styled from 'styled-components'

const List = (props) => {

    return <GroceryList>
        <h1>Pname</h1>
        <img alt={`item-${props.id}`}/>
        <div>
            <ol>
                <li>P1</li>
                <li>P2</li>
            </ol>
        </div>
    </GroceryList>
}

export default List

const GroceryList = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 15vw;
    height: 25vh;
    text-align: center;

    ol {
        list-style-type: none;
        padding-left: 0;
    }
`