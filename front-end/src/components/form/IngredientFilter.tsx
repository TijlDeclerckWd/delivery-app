import React, { useRef, useState } from "react";
import { Box, TextField, Autocomplete } from "@mui/material";
import { useFetch } from "core/api/FetchProvider";
import { useDebounce } from "core/hooks/useDebounce";
import { IngredientOption } from 'core/types/ingredients';
import { useDidMountEffect } from "core/hooks/useDidMountEffect";

interface IngredientFilterProps {
  addChosenIngredient: (ingredient: IngredientOption) => void;
}

const categoryDB = [
  {
    label: "Desktop PC",
    value: 1,
  },
  {
    label: "Notebook",
    value: 2,
  },
  {
    label: "Monitor",
    value: 3,
  },
];

export const IngredientFilter = ({
  addChosenIngredient,
}: IngredientFilterProps) => {
  const autocompleteRef = useRef();
  const [options, setOptions] = useState([]);
  const [itemsChosen, setItemsChosen] = useState(0);
  const fetch = useFetch();

  const searchIngredient = (val: string) => {
    fetch
      .get(
        `search?query=${val}&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`,
        {
          alternativeBaseUrl:
            process.env.NEXT_PUBLIC_SPOONACULAR_INGREDIENT_ROOT,
        }
      )
      .then((result) => {
        console.log("result", result);
        setOptions(result.results);
      });
  };

  const { trigger: triggerSearchIngredient } = useDebounce(searchIngredient);

  const pickAndResetSearch = (option: IngredientOption) => {
    addChosenIngredient(option);
    setItemsChosen((prev) => prev + 1);
  };

  useDidMountEffect(() => {
    autocompleteRef.current.focus();
  }, [itemsChosen]);

  return (
    <Box>
      {/* TODO: change this textfield with a textfield dropdown, we should differentiate there between changes in the input, and the clicking of an item to add it */}
      <Autocomplete
        id="ingredient-search"
        sx={{ width: 500 }}
        key={itemsChosen}
        options={options}
        autoHighlight
        getOptionLabel={(option: IngredientOption) => option.name}
        renderOption={(props, option: IngredientOption) => {
          return (
            <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
            onClick={() => pickAndResetSearch(option)}
            >
              <img
                loading="lazy"
                width="40"
                src={`${process.env.NEXT_PUBLIC_SPOONACULAR_INGREDIENT_IMAGE_URL}100x100/${option.image}`}
                alt="ingredient image"
                />
              {option.name}
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
          {...params}
          onChange={(e) => triggerSearchIngredient(e.target.value)}
          inputRef={autocompleteRef}
          label="Add an ingredient"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
          />
          )}
      />
    </Box>
  );
};
