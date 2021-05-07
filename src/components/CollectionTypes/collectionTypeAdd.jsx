import React from 'react';

import { Form } from 'react-final-form';
import { 
  TextField,
} from 'mui-rff';
import {
  Paper,
  Grid,
  Button,
} from '@material-ui/core';

// TODO: Submit button (Add hook to API call here)
const onSubmit = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};

const validate = values => {
  const errors = {};
  if (!values.fcCollectionType_id) {
    errors.fcCollectionType_id = 'Required';
  }
  if (!values.fcCollectionType_name) {
    errors.fcCollectionType_name = 'Required';
  }
  if (!values.fcCollectionType_desc) {
    errors.fcCollectionType_desc = 'Required';
  }
  return errors;
};

const formFields = [
  {
    size: 3,
    field: ( 
      <TextField
        label="Code"
        name="fcCollectionType_id"
        required={true}
      />  
    )
  },
  {
    size: 9,
    field: (
      <TextField
        label="Collection Type Name"
        name="fcCollectionType_name"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        label="Collection Type Description"
        name="fcCollectionType_desc"
        margin="none"
        multiline
        required={true}
      />
    ),
  },
  { 
    size: 12,
    field: (
      <TextField
        name="fcCollection_image"
        label='Collection Image'
        type='file'
        id='outlined-basic'
        variant="outlined" 
        helperText='Optional'
        InputLabelProps={{
            shrink: true,
          }}
      />
    )
  }
];

const CollectionTypeAdd = () => {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                {formFields.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
}

export default CollectionTypeAdd
