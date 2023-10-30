import { defineRecipe } from '@pandacss/dev'

export const accordionRecipe = defineRecipe({
    className: "accordion",
    description: "The Styles for the accordion component",
    jsx: ["Accordion"],
    base: {
        color: 'black',
        margin: '0 10px',
        backgroundColor: '#e7e9eb',
        padding: '20px',
        border: '1px solid #606470'
    },
    variants: {
        accordion: {
            title: { fontWeight: 'bold', cursor: 'pointer' },
        },
    }
})
