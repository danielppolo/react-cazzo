import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #CCC;
  box-sizing: border-box;
  height: 60px;
  .list-item {
    display: flex;
    align-items: center;
  }
`

const Label = styled.span`
  margin-left: 10px;
  text-decoration: ${({checked}) => (checked) ? 'line-through' : 'none'};
` 

function Item({label, checked, selected, onCheck, onSelect}) {
  return (
    <ItemStyled>
      <div className="list-item">
        <input 
        type="checkbox" 
        name={label} 
        checked={selected}
        onClick={onSelect}
        id={label}/>
        <Label checked={checked}>{label}</Label>
      </div>
    {
      (!checked) && (
        <Button color="secondary" onClick={onCheck}>
        Complete
        </Button>
      )
    }
  </ItemStyled>
  )
}

export default Item;