import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

export function useForm(initialFValues) {

    const [values, setValues] = useState(initialFValues);

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
        handleInputChange,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1)
        }
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export function Form(props) {

    const classes = useStyles
    return(
        <form className={classes.root}>
            {props.children}
        </form>
    )
}