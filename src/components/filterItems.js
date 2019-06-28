import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


function FilterItems({onChange}) {
    const [value, setValue] = useState('')


    const handleChange = event => {
        const val = event.target.value
        onChange(val)
        setValue(val)
    }
    return (
        <>
            <Select
                value={value}
                onChange={handleChange}
                >
                <MenuItem value='all'>All</MenuItem>
                <MenuItem value='initials'>Initial</MenuItem>
                <MenuItem value='added'>Added</MenuItem>
                <MenuItem value='selected'>Selected</MenuItem>
                <MenuItem value='unselected'>Unselected</MenuItem>
                <MenuItem value='completed'>Completed</MenuItem>
                </Select>
        </>
    )
}

export default FilterItems