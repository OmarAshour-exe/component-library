import {splitProps} from '../helpers.mjs';
import {createRecipe, mergeRecipes} from './create-recipe.mjs';

const breadcrumbsFn = /* @__PURE__ */ createRecipe('breadcrumbs', {}, [])

const breadcrumbsVariantMap = {
    "text": [
        "bold"
    ]
}

const breadcrumbsVariantKeys = Object.keys(breadcrumbsVariantMap)

export const breadcrumbs = /* @__PURE__ */ Object.assign(breadcrumbsFn, {
    __recipe__: true,
    __name__: 'breadcrumbs',
    raw: (props) => props,
    variantKeys: breadcrumbsVariantKeys,
    variantMap: breadcrumbsVariantMap,
    merge(recipe) {
        return mergeRecipes(this, recipe)
    },
    splitVariantProps(props) {
        return splitProps(props, breadcrumbsVariantKeys)
    },
})