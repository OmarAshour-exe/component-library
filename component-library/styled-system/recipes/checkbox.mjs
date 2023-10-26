import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const checkboxFn = /* @__PURE__ */ createRecipe('checkbox', {}, [])

const checkboxVariantMap = {}

const checkboxVariantKeys = Object.keys(checkboxVariantMap)

export const checkbox = /* @__PURE__ */ Object.assign(checkboxFn, {
  __recipe__: true,
  __name__: 'checkbox',
  raw: (props) => props,
  variantKeys: checkboxVariantKeys,
  variantMap: checkboxVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, checkboxVariantKeys)
  },
})