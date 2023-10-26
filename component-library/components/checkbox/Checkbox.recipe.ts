import { defineRecipe } from '@pandacss/dev'

export const checkboxRecipe = defineRecipe({
    className: "checkbox",
    description: "The Styles for the checkbox component",
    jsx: ["Checkbox"],
    base: {
        minHeight: "10px",
        minWidth: "10px",
        cursor: "pointer",
        margin: "3px",
        accentColor: "blue",
    },
})
