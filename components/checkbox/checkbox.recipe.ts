import {defineRecipe} from "@pandacss/dev";

export const checkboxRecipe = defineRecipe({
    className: "checkbox",
    description: "The styles for the Checkbox component",
    jsx: ["Checkbox"],
    base: {
        color: "blue",
        height: "40px",
        cursor: "pointer",
        padding: "0 30px",
    }
});