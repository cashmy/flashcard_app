import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

export function useForm(initialFValues) {

    const [values, setValues] = useState(initialFValues);
    const [errors, setErros] = useState({})

    const handleInputChange = event => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root': {
            margin: theme.spacing(1)
        },
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    fullWidth: {
        '& .MulFormControl-fullWidth': {
            margin: theme.spacing(1)
        }
    }

}))

export function Form(props) {

    const classes = useStyles();
    const {children, ...other} = props;
    return(
        <form className={classes.root} autoComplete="off" {...other} >
            {props.children}
        </form>
    )
}