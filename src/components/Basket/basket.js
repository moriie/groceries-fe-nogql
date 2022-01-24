import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import List from '../List'

const Basket = () => {

    const [newList, setNewlist] = useState({name: '', description: '', items: ''})

    const createLists = () => {
        fetch(`${process.env.FETCHURL}/baskets/${document.cookie.match(RegExp("/uid/"))}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then(resp=>resp.json())
        .then(json=>json.map(listitem=>{
            return <List item={listitem} />
        }))
        .catch(error=>console.log(error))
    }

    const addList = () => {
        fetch(`${process.env.FETCHURL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({query: `mutation: addList(${{...newList}})`})
        })
        .then(resp=>resp.json())
        .then(json=>json.map(listitem=>{
            return <List item={listitem} />
        }))
        .catch(error=>console.log(error))

        setNewlist({name: '', description: '', items: ''})
    }

    return <Dashboard>
            {createLists}
            <Link to="/add_new_list">
                <AddButton type="image" src="./images/plus.jpg"/>
            </Link>
        </Dashboard>
}

export default Basket

const Dashboard = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 5vh 3vw 5vh 3vw;
`

const AddButton = styled.input`
    height: 20vh;
    border: 1px solid #999;
    border-radius: 10px;
    padding: 2.5vh 2.5vw;
    outline: none;
`