import { Box, Button, Grid, Select } from "@mui/material";
import { ControlLabel, PageTitle, ToggleBox } from "components";
import Head from "next/head";
import React from "react";
import * as yup from "yup";
import { PageContainer } from "styled";
import { useFormik, Field, FormikProvider, FieldArray } from "formik";
import TextFieldControl from "components/form/controls/TextFieldControl";
import { IngredientFilter } from "./IngredientFilter";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
});

const categories = [
  "Healthy",
  "Cheat Meal",
  "No Fat",
  "High Protein",
  "Sour",
  "Sweet",
  "Fast Food",
  "Spicy",
];

const AddMeal = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      categories: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log("formik values", formik);

  return (
    <Box>
      <Head>
        <title>Add Meal</title>
      </Head>
      <PageContainer>
        <PageTitle>Add Meal</PageTitle>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <Box mt={2} maxWidth="400px">
                <TextFieldControl
                  id="name"
                  required
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Box>
              <Box mt={2} maxWidth="400px">
                <TextFieldControl
                  multiline
                  minRows={3}
                  id="description"
                  name="description"
                  label="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                />
              </Box>
              <Box mt={3}>
                <ControlLabel
                  label="Categories"
                  subLabel="Select all the characteristics that are present in your meal"
                >
                  <Grid container spacing={2}>
                    <FieldArray
                      name="categories"
                      render={(arrayHelpers) => (
                        <>
                          {categories.map((category) => (
                            <Grid item xs={4} md={3}>
                              <Field>
                                {({ field }: any) => (
                                  <ToggleBox
                                    {...field}
                                    id={category}
                                    name={category}
                                    label={category}
                                    arrayHelpers={arrayHelpers}
                                  />
                                )}
                              </Field>
                            </Grid>
                          ))}
                        </>
                      )}
                    />
                  </Grid>
                </ControlLabel>
              </Box>
              <Box mt={3}>
                <ControlLabel
                  label="Ingredients"
                  subLabel="Select all the ingredient of your meal"
                >
                  <IngredientFilter />
                </ControlLabel>
              </Box>

              <Box mt={2}>
                <Button color="primary" variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </Box>
          </form>
        </FormikProvider>
      </PageContainer>
    </Box>
  );
};

export default AddMeal;
