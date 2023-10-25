import { defineRecipe } from '@pandacss/dev'

export const checkboxRecipe = defineRecipe({
    className: "checkbox",
    description: "The Styles for the checkbox component",
    jsx: ["Checkbox"],
    base: {
        minHeight: "25px",
        minWidth: "25px",
        cursor: "pointer",
        margin: "10px",
        accentColor: "blue"
    },
})
