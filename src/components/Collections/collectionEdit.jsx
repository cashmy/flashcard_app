import React from 'react';

import { Form } from 'react-final-form';
import { 
  TextField,
  Select,
} from 'mui-rff';
import {
  Paper,
  Grid,
  Button,
  MenuItem,
} from '@material-ui/core';

// TODO: Add Hook to populate form with data

// Submit button
// TODO:(Add hook to API call here on submit)
const onSubmit = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};

const validate = values => {
  const errors = {};
  if (!values.fcCollection_title) {
    errors.fcCollection_title = 'Required';
  }
  if (!values.fcCollectionType_id) {
    errors.fcCollectionType_id = 'Required';
  }
  return errors;
};

const formFields = [
  {
    size: 12,
    field: (
      <TextField
        label="Collection Name"
        name="fcCollection_title"
        margin="none"
      />
    ),
  },
  { 
    size: 12,
    field: (
      <Select name="fcCollectionType_id" 
              label="Collection Type" 
              formControlProps={{ margin: 'normal' }}>
                <MenuItem value="WD">Word-Definition</MenuItem>
                <MenuItem value="QA">Question-Answer</MenuItem>
                <MenuItem value="MC">Multiple Choice</MenuItem>
      </Select>
    )
  },
  { 
    size: 12,
    field: (
      <TextField
        name='fcCollection_image'
        type='file'
        id='outlined-basic'
        variant='outlined'
        label='Collection Image' 
        helperText='Optional'
        InputLabelProps={{
            shrink: true,
          }}
      />
    )
  }
];

const CollectionEdit = () => {
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

export default CollectionEdit
