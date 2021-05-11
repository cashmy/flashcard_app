import React, {useEffect} from 'react';
import { Paper, Grid, } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import { useForm, Form} from '../../components/useForm';
import axios from 'axios'

// Initialization: Setup initial field values.
const initialFValues = {
  fcCollectionType_id: '',
  fcCollectionType_name: '',
  fcCollectionType_desc: '',
  fcCollectionType_image: ''
}

const CollectionTypeEdit = (props) => {

  const { requestedRecord }  = props

  // On change of props from parent, re-initialize form fields
  useEffect(() => {
    if(requestedRecord != null) {
      console.log("Requested Record: ", requestedRecord)
      setValues({
        ...requestedRecord
      })
    }
  }, [requestedRecord])

  // Validation function --> executed on form submission
  const validate = (fieldValues = values) => {
    let temp = {...errors};
    if('fcCollectionType_name' in fieldValues)
        temp.fcCollectionType_name = fieldValues.fcCollectionType_name ? "" : "This field is required."
    if('fcCollectionType_desc' in fieldValues)
        temp.fcCollectionType_desc = fieldValues.fcCollectionType_desc ? "" : "This field is required."
    setErrors({
        ...temp
    })

    if(fieldValues === values)
    return Object.values(temp).every(x => x === "")
  }

  // Controls parameters for field props    
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate)

  // SaveSubmit Callback handler - event driven
  const handleSubmit = (event) => {
    event.preventDefault();
    if(validate())
      // TODO: Refactor into services layer (?)
      // TODO: Add a callback to Parent(View) that re-renders the list table (after each add)
      axios.put('http://127.0.0.1:8000/fcCollectionType/'+ values.fcCollectionType_id, values)
          .then(response => { props.onClearCallback("Updated")
                              alert("Record updated")
            })
          .catch(error => alert('There was an error! ' + error.message));
      
  };

  const handleCancel = (event) => {
    props.onClearCallback("Clear")
}

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 800 }}>

      <Form onSubmit={handleSubmit}>
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            
            {/* Field:  ID/Code*/}
            <Grid item xs={3} key={0}>
              <Controls.Input
                label='Code'
                name='fcCollectionType_id'
                value={values.fcCollectionType_id}
                onChange={handleInputChange}
                error={errors.fcCollectionType_id}
                disabled
              />
            </Grid>

            {/* Field: Collection Type Name */}
            <Grid item xs={9} key={1}>
              <Controls.Input
                label='Collection Type Name'
                name='fcCollectionType_name'
                value={values.fcCollectionType_name}
                onChange={handleInputChange}
                error={errors.fcCollectionType_name}
                inputProps={{style: {textTransform: 'capitalize'}}}
              />
            </Grid>

            {/* Field:  Description */}
            <Grid item xs={12} key={2}>
              <Controls.Input
                label='Description'
                name='fcCollectionType_desc'
                value={values.fcCollectionType_desc}
                onChange={handleInputChange}
                multiline
                rows={2}
                error={errors.fcCollectionType_desc}
              />
            </Grid>

            {/* Field: Image File  */}
            <Grid item xs={12} key={3}>
              <Controls.Input
                  label='Collection Type Image'
                  type='file'
                  value={values.fcCollectionType_image}
                  name='fcCollectionType_image'
                  onChange={handleInputChange}
                  helperText='Optional'
                  InputLabelProps={{
                      shrink: true,
                  }}
              />
            </Grid>


            {/* BUTTONS: Cancel, Reset, Submit */}
            <Grid item style={{ marginTop: 16 }}>
              <Controls.Button
                text="Cancel"
                color="secondary"
                onClick={handleCancel}
              />
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Controls.Button
                text="Reset"
                color="default"
                onClick={resetForm}
              />
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Controls.Button
                type="submit"
                text="Update"
              />
            </Grid>
          </Grid>
        {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
        </Paper>
      </Form>
    </div>
  );
}

export default CollectionTypeEdit
