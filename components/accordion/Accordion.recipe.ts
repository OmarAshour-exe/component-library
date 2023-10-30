import { defineRecipe } from '@pandacss/dev'

export const accordionRecipe = defineRecipe({
    className: "accordion",
    description: "The Styles for the accordion component",
    jsx: ["Accordion"],
    base: {
        fontWeight: '600',
        color: 'black',
        margin: '10px',
        backgroundColor: '#e7e9eb',
        padding: '20px',
    },
    variants: {
        accordion: {
            title: { fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' },
            active: { backgroundColor: '#e0ebf1', padding: '20px', margin: '10px' }
        },
    }
})
