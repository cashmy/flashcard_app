import React from 'react'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect} from '@material-ui/core'

const Select = (props) => {
    const { name, label, value, error=null, onChange, options } = props

    return (
        <FormControl variant='outlined'
        {...(error && {error:true})}
        >
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
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}

export default Select