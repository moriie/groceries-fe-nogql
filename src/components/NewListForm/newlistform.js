import React from 'react'
import styled from 'styled-components'

const NewListForm = () => {

    return <div className='new-item-ui'>
        <Preview>

        </Preview>
        <Form>

        </Form>
    </div>
}

export default NewListForm

const Form = styled.div`
    width: 35%;
    height: 100%;
    border-left: 1px solid black;
`

const Preview = styled.div`
    width: 65%;
    height: 100%;
` 