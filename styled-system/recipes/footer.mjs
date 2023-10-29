import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const footerFn = /* @__PURE__ */ createRecipe('footer', {}, [])

const footerVariantMap = {}

const footerVariantKeys = Object.keys(footerVariantMap)

export const footer = /* @__PURE__ */ Object.assign(footerFn, {
  __recipe__: true,
  __name__: 'footer',
  raw: (props) => props,
  variantKeys: footerVariantKeys,
  variantMap: footerVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, footerVariantKeys)
  },
})