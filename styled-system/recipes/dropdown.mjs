import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const dropdownFn = /* @__PURE__ */ createRecipe('dropdown', {}, [])

const dropdownVariantMap = {
  "dropdown": [
    "title",
    "hover"
  ]
}

const dropdownVariantKeys = Object.keys(dropdownVariantMap)

export const dropdown = /* @__PURE__ */ Object.assign(dropdownFn, {
  __recipe__: true,
  __name__: 'dropdown',
  raw: (props) => props,
  variantKeys: dropdownVariantKeys,
  variantMap: dropdownVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, dropdownVariantKeys)
  },
})