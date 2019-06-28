import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const AddItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #CCC;
  box-sizing: border-box;
  height: 60px;
`

const ItemInput = styled.input`
  margin-left: 25px;
  font-family: 'Space Mono', monospace;
  font-size: 16px;
  outline: none;
  border: none;
  flex-grow: 1;
  &:focus {
    outline: none;
  }
`

function AddItem({onSubmit}) {
  const [value, setValue] = useState('')
  useEffect(() => {
    const keyUpListener = event => {
      if (event.keyCode === 13) {
        setValue('')
        onSubmit(value)
      }
    }
    document.getElementById('todo-input').addEventListener('keyup', keyUpListener)
    return () => document.getElementById('todo-input').removeEventListener('keyup', keyUpListener)
  }, [value])

  const handleChange = event => setValue(event.target.value)

  const handleSubmit = () => {
    setValue('')
    onSubmit(value)
  }
  return (
    <AddItemStyled>
      <ItemInput
        type="text"
        id="todo-input"
        value={value}
        onChange={handleChange}
        placeholder="add item"
      />
      <Button color="primary" onClick={handleSubmit}>
        Add
      </Button>
    </AddItemStyled>
  )
}

export default AddItem