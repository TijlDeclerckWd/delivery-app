import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
} from "@mui/material";
import { ControlLabel, PageTitle, ToggleBox } from "components";
import Head from "next/head";
import React from "react";
import * as yup from "yup";
import { PageContainer } from "styled";
import { useFormik, Field, FormikProvider, FieldArray } from "formik";
import TextFieldControl from "components/form/controls/TextFieldControl";
import { IngredientFilter } from "../../../src/components/form/IngredientFilter";
import { IngredientOption } from "core/types/ingredients";
import { Delete as DeleteIcon } from "mdi-material-ui";
import { UploadPicture } from "components/images/UploadPicture";

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
      ingredients: [],
      profilePicture: "",
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
              <Grid container>
                <Grid item md={6}>
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
                </Grid>
                <Grid item md={6}>
                  <ControlLabel label="Meal Picture">
                    <UploadPicture
                      onChange={(b64: string) =>
                        formik.setFieldValue("profilePicture", b64)
                      }
                    />
                  </ControlLabel>
                </Grid>
              </Grid>

              <Box mt={3}>
                <ControlLabel
                  label="Categories"
                  subLabel="Select all the characteristics that are present in your meal"
                >
                  <Grid maxWidth='700px' container spacing={2}>
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
              <Box mt={3} display="flex">
                <FieldArray
                  name="ingredients"
                  render={(arrayHelpers) => (
                    <>
                      <Box width="50%">
                        <ControlLabel
                          label="Ingredients"
                          subLabel="Select all the ingredient of your meal"
                        >
                          <IngredientFilter
                            addChosenIngredient={(
                              ingredient: IngredientOption
                            ) => {
                              console.log("ingredients", ingredient);
                              arrayHelpers.push(ingredient);
                            }}
                          />
                        </ControlLabel>
                      </Box>
                      <Box width="50%">
                        <List>
                          {arrayHelpers.form.values.ingredients.map(
                            (ingredient: IngredientOption, index: number) => {
                              return (
                                <ListItem
                                  secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                      <DeleteIcon />
                                    </IconButton>
                                  }
                                >
                                  <ListItemAvatar>
                                    <Avatar>
                                      <img
                                        src={`${process.env.NEXT_PUBLIC_SPOONACULAR_INGREDIENT_IMAGE_URL}100x100/${ingredient.image}`}
                                      />
                                    </Avatar>
                                  </ListItemAvatar>
                                  <ListItemText primary={ingredient.name} />
                                </ListItem>
                              );
                            }
                          )}
                        </List>
                      </Box>
                    </>
                  )}
                ></FieldArray>
              </Box>
              {/* Where do we go back to when we submitted? */}
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
