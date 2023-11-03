import { defineRecipe } from '@pandacss/dev'

export const outputsRecipe = defineRecipe({
    className: "outputs",
    description: "The Styles for the outputs component",
    jsx: ["Outputs"],
    base: {
        fontWeight: '600',
        color: 'black',
        margin: '0 10px',
        backgroundColor: '#e7e9eb',
        padding: '15px',
    },
    variants: {
        output: {
            li: { backgroundColor: '#e0ebf1', borderBottom: '1px solid black' },
            secli: { backgroundColor: '#FBD2BE', borderBottom: '1px solid black' }
        },
    }
})
