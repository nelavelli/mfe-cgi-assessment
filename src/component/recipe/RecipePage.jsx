import React, { useEffect, useState } from "react";
import { useStyles } from "../utils/utils";
import RecipeList from "./RecipeList";
import { fetchAPIResponse } from "../../service/APIService";
import MultiSelectInput from "../utils/MultiSelectInput";
import useAPIError from "../utils/UseAPIError";

export default function RecipePage() {
  const classes = useStyles();
  const { addError } = useAPIError();
  const [recipes, setRecipes] = useState([]);
  const [options, setOptions] = useState([]);
  const RECEPIES_ENDPOINT = "recipes/";

  useEffect(() => {
    if (recipes.length === 0 || options.length === 0) getRecipes();
  }, [addError]);

  const onOptionsChange = (value) => {
    value[value.length - 1] === "all"
      ? getRecipes()
      : getRecipesByIngredients(value);
  };

  async function getRecipes() {
    try {
      const response = await fetchAPIResponse(RECEPIES_ENDPOINT, addError);
      let xyz = flatten(response.map((a) => a.ingredients))
        .sort()
        .filter(function (item, pos, ary) {
          return !pos || item !== ary[pos - 1];
        });
      setOptions(xyz);
      setRecipes(response);
    } catch (error) {
      setOptions([]);
      setRecipes([]);
    }
  }
  async function getRecipesByIngredients(ingredients) {
    try {
      const response = await fetchAPIResponse(
        RECEPIES_ENDPOINT + ingredients.toString()
      );
      setRecipes(response);
    } catch (error) {
      setRecipes([]);
    }
  }

  function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
      );
    }, []);
  }

  return (
    <div className={classes.marginAlign}>
      <MultiSelectInput
        onOptionsChange={onOptionsChange}
        classes={classes}
        options={options}
      />
      <RecipeList rows={recipes ? recipes : []} classes={classes} />
    </div>
  );
}
