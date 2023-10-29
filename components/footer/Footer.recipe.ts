import { defineRecipe } from '@pandacss/dev'

export const footerRecipe = defineRecipe({
    className: "footer",
    description: "The Styles for the footer component",
    jsx: ["Footer"],
    base: {
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
    },
})
