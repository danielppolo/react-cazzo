import React from 'react';
import Button from '@material-ui/core/Button';


function Item({label, checked, selected, onCheck, onSelect}) {
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