import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


function Item({label, checked, selected, onCheck, onSelect}) {
    console.log(selected)
    return (
        <div>
            <input 
            type="checkbox" 
            name={label} 
            checked={selected}
            onClick={onSelect}
            id={label}/>
        <span>{label}</span>
        {
            (!checked) && (
                <Button variant="contained" onClick={onCheck}>
                Complete
                </Button>
            )
        }
    </div>
    )
}

export default Item;