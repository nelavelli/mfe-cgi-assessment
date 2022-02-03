import React, { useEffect, useState } from "react";
import { useStyles } from "../utils/utils";
import ReceipeList from "./ReceipeList";
import { fetchAPIResponse } from "../../service/APIService";
import MultiSelectInput from "../utils/MultiSelectInput";
import useAPIError from "../utils/UseAPIError";

export default function ReceipePage() {
  const classes = useStyles();
  const { addError } = useAPIError();
  const [receipes, setReceipes] = useState([]);
  const [options, setOptions] = useState([]);
  const RECEPIES_ENDPOINT = "receipes/";

  useEffect(() => {
    if (receipes.length === 0 || options.length === 0) getRecepies();
  }, [addError]);

  const onOptionsChange = (value) => {
    value[value.length - 1] === "all"
      ? getRecepies()
      : getRecepiesByIngredients(value);
  };

  async function getRecepies() {
    try {
      const response = await fetchAPIResponse(RECEPIES_ENDPOINT, addError);
      let xyz = flatten(response.map((a) => a.ingredients))
        .sort()
        .filter(function (item, pos, ary) {
          return !pos || item !== ary[pos - 1];
        });
      setOptions(xyz);
      setReceipes(response);
    } catch (error) {
      setOptions([]);
      setReceipes([]);
    }
  }
  async function getRecepiesByIngredients(ingredients) {
    try {
      const response = await fetchAPIResponse(
        RECEPIES_ENDPOINT + ingredients.toString()
      );
      setReceipes(response);
    } catch (error) {
      setReceipes([]);
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
      <ReceipeList rows={receipes ? receipes : []} classes={classes} />
    </div>
  );
}
