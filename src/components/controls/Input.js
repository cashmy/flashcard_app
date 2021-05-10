import React from 'react'
import { TextField } from '@material-ui/core'

const Input= (props) => {
    const { name, label, value, onChange, ...other} = props

    return (
        <TextField 
            variant='outlined'
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            fullWidth
            {...other}
            error
            helperText="some validation error"
        />
    )
}

export default Input