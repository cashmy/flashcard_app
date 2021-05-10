import React from 'react'
import { FormControl, InputLabel, MenuItem, Select as MuiSelect} from '@material-ui/core'

const Select = (props) => {
    const { name, label, value, onChange, options } = props

    return (
        <FormControl variant='outlined'>
            <InputLabel>{label}</InputLabel>
            <MuiSelect>
                name={name}
                value={value}
                onChange={onChange}
                fullWidth
                    <MenuItem value="">None</MenuItem>
                    {
                        options
                    }
            </MuiSelect>
        </FormControl>
    )
}

export default Select