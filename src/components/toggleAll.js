import React from 'react'
import Button from '@material-ui/core/Button';

function ToggleAll({onClick, active}) {
    return (
      <Button color="primary" onClick={onClick}>
        {(active) ? 'Unselect all' : 'Select all'}
      </Button>
    )
}

export default ToggleAll