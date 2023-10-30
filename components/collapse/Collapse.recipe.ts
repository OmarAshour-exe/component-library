import { defineRecipe } from '@pandacss/dev'

export const collapseRecipe = defineRecipe({
    className: "collapse",
    description: "The Styles for the collapse component",
    jsx: ["Collapse"],
    base: {
        fontWeight: '600',
        color: 'black',
        margin: '10px',
        backgroundColor: '#e7e9eb',
        padding: '20px',
    },
    variants: {
        collapse: {
            title: { fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' },
            active: { backgroundColor: '#e0ebf1', padding: '20px', margin: '10px' }
        },
    }
})
