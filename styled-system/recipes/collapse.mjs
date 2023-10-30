import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const collapseFn = /* @__PURE__ */ createRecipe('collapse', {}, [])

const collapseVariantMap = {
  "collapse": [
    "title",
    "active"
  ]
}

const collapseVariantKeys = Object.keys(collapseVariantMap)

export const collapse = /* @__PURE__ */ Object.assign(collapseFn, {
  __recipe__: true,
  __name__: 'collapse',
  raw: (props) => props,
  variantKeys: collapseVariantKeys,
  variantMap: collapseVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, collapseVariantKeys)
  },
})