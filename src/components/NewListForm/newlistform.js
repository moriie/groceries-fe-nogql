import React, { useState } from 'react'
import styled from 'styled-components'

const NewListForm = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [items, setItems] = useState([''])

    const handleSubmit = () => {

    }

    const handleItems = () => {
        return items.map((item, index)=>{
            return <input key={index} placeholder="Item" name={`item-${index}`} value={item} onChange={(e)=>handleItemChange(e,index)}/>;
        })
    }

    const handleItemChange = (e, index) => {
        let newArr = [...items];
        newArr[index] = e.target.value;
        setItems(newArr);
    }

    const handleItem = (e) => {
        let newArr = [...items];
        if (e.target.name === 'add'){
            newArr.push('')
        }
        else{
            newArr.pop()
        }
        setItems(newArr)
    }

    return <NewItemUI>
        <Preview>
            <h1>Preview</h1>
            <div className='preview-window'>

            </div>
        </Preview>
        <Form>
            <h1>Create New List</h1>
            <input name='name' placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input name='description' placeholder="Description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            {handleItems()}
            <button className='add-remove' name='add' onClick={handleItem}>Add Item</button>
            <button className='add-remove' name='remove' onClick={handleItem}>Remove Item</button>
            <button className='upload'>
                <label htmlFor="upload-pdf">Upload PDF</label>
                <input type="file" id="upload-pdf" className='upload' accept=".pdf"/>
            </button>
            <button className='submit' onClick={handleSubmit}>Submit List</button>
        </Form>
    </NewItemUI>
}

export default NewListForm

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: 75vh;
    text-align: center;

    h1 {
        margin-bottom: 4vh;
    }

    input {
        margin: 1vh 0 1vh 0;
        padding-left: 5px;  
        width: 50%;
        height: 5%;
        border: 1px solid black;
        background-color: whitesmoke;
        font-size: 1.5em;
        outline: none;
    }

    button.add-remove {
        margin: 1vh 0 1vh 0;
        padding-left: 5px;  
        width: 50%;
        height: 3%;
        border: 1px solid black;
        font-size: 1em;
        outline: none;
        font-weight: bold;
        color: white;
        background-color: #63C7EC;

        &:hover {
            background-color: #5AB0D0;
        }
    }

    button.submit, button.upload {
        position: absolute;
        bottom: 6vh;
        padding-left: 5px;  
        width: 25%;
        height: 5%;
        border: 1px solid black;
        font-size: 1em;
        outline: none;
        font-weight: bold;
        color: white;
        background-color: #63C7EC;

        &:hover {
            background-color: #5AB0D0;
        }
    }

    input.upload {
        display: none;
    }

    button.upload {
        bottom: 12vh;
    }
`

const Preview = styled.div`
    display: inline-block;
    width: 50vw;
    border-right: 1px solid black;

    div.preview-window {
        height: 80%;
        margin: 5vh 2vw;
        background-color: whitesmoke;
        border: 1px solid black;
        border-radius: 10px;
    }
` 

const NewItemUI = styled.div`
    display: flex;
    height: 90vh;

    input {
        font-family: "Montserrat", cursive;
    }

    button {
        font-family: "Montserrat", cursive;
    }

    h1 {
        text-align: center;
        font-family: "Fredericka the Great", cursive;
    }
`