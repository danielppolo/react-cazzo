import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function AddItem({onSubmit}) {
    const [value, setValue] = useState('')

    const handleChange = event => setValue(event.target.value)

    const handleSubmit = () => {
        setValue('')
        onSubmit(value)
    }
    return (
        <>
            <TextField
                id="standard-name"
                label="Name"
                value={value}
                onChange={handleChange}
                margin="normal"
            />
            <Button variant="contained" onClick={handleSubmit}>
                Add item
            </Button>
        </>
    )
}

export default AddItem