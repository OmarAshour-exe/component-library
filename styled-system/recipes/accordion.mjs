import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const accordionFn = /* @__PURE__ */ createRecipe('accordion', {}, [])

const accordionVariantMap = {
  "accordion": [
    "title"
  ]
}

const accordionVariantKeys = Object.keys(accordionVariantMap)

export const accordion = /* @__PURE__ */ Object.assign(accordionFn, {
  __recipe__: true,
  __name__: 'accordion',
  raw: (props) => props,
  variantKeys: accordionVariantKeys,
  variantMap: accordionVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, accordionVariantKeys)
  },
})