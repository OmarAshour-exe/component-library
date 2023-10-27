import {defineRecipe} from '@pandacss/dev'

export const breadcrumbsRecipe = defineRecipe({
    className: "breadcrumbs",
    description: "The Styles for the breadcrumbs component",
    jsx: ["Breadcrumbs"],
    base: {
        fontWeight: '500',
        color: 'blue'
    },

    variants: {
        text: {
            bold: {fontWeight: 'bold', color: 'turquoise.1'},
        },
    }
})
