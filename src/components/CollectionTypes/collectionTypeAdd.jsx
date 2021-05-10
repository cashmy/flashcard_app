import React from 'react';
import { Paper, Grid, } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import { useForm, Form} from '../../components/useForm';

const initialFValues = {
    fcCollectionType_id: '',
    fcCollectionType_name: '',
    fcCollectionType_desc: '',
    fcCollectionType_image: ''
}

const CollectionTypeAdd = () => {

    const validate = () => {
        let temp = {};
        temp.fcCollectionType_id = values.fcCollectionType_id ? "" : "This field is required."
        temp.fcCollectionType_name = values.fcCollectionType_name ? "" : "This field is required."
        temp.fcCollectionType_desc = values.fcCollectionType_desc ? "" : "This field is required."
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        // setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFValues)


  // TODO: Submit button (Add hook to API call here)
    const handleSubmit = (event) => {
        event.preventDefault();
        if(validate())
        window.alert('testing')
        // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        // await sleep(300);
        // window.alert(JSON.stringify(values, 0, 2));
    };


  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
    <Form onSubmit={handleSubmit}>
        <Paper style={{ padding: 16}}>
            <Grid container alignItems="flex-start" spacing={2}>
            
                {/* Field:  ID/Code*/}
                <Grid item xs={3} key={0}>
                    <Controls.Input
                        label='Code'
                        name='fcCollectionType_id'
                        value={values.fcCollectionType_id}
                        onChange={handleInputChange}
                        error={errors.fcCollectionType_id}
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


                <Grid item style={{ marginTop: 16 }}>
                    <Controls.Button
                        type="cancel"
                        text="Cancel"
                        color="secondary"
                    />
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                    <Controls.Button
                        text="Reset"
                        color="default"
                    />
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                    <Controls.Button
                        type="submit"
                        text="Submit"
                    />
                </Grid>
            </Grid>

            <pre>{JSON.stringify(values, 0, 2)}</pre>
        </Paper>
    </Form>
    </div>
  );
 }

export default CollectionTypeAdd;