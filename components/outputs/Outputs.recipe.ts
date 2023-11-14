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
        border: '1px solid #c7ccd1'
    },
    variants: {
        output: {
            li: { backgroundColor: '#edf4f7', borderBottom: '1px solid #95bbd0', borderTop: '1px solid #95bbd0' },
            secli: { backgroundColor: '#f1f2f3', borderBottom: '1px solid #c7ccd1', borderTop: '1px solid #c7ccd1' }
        },
    }
})
