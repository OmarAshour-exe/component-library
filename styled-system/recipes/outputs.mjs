import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const outputsFn = /* @__PURE__ */ createRecipe('outputs', {}, [])

const outputsVariantMap = {
  "output": [
    "li",
    "secli"
  ]
}

const outputsVariantKeys = Object.keys(outputsVariantMap)

export const outputs = /* @__PURE__ */ Object.assign(outputsFn, {
  __recipe__: true,
  __name__: 'outputs',
  raw: (props) => props,
  variantKeys: outputsVariantKeys,
  variantMap: outputsVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, outputsVariantKeys)
  },
})