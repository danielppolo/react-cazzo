import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


function FilterItems({onChange}) {
  const [value, setValue] = useState('all')


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
        <MenuItem value='all'>ALL</MenuItem>
        <MenuItem value='initials'>INITIAL</MenuItem>
        <MenuItem value='added'>ADDED</MenuItem>
        <MenuItem value='selected'>SELECTED</MenuItem>
        <MenuItem value='unselected'>UNSELECTED</MenuItem>
        <MenuItem value='completed'>COMPLETED</MenuItem>
      </Select>
    </>
  )
}

export default FilterItems