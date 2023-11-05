import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const modalFn = /* @__PURE__ */ createRecipe('modal', {}, [])

const modalVariantMap = {
  "modal": [
    "close"
  ]
}

const modalVariantKeys = Object.keys(modalVariantMap)

export const modal = /* @__PURE__ */ Object.assign(modalFn, {
  __recipe__: true,
  __name__: 'modal',
  raw: (props) => props,
  variantKeys: modalVariantKeys,
  variantMap: modalVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, modalVariantKeys)
  },
})