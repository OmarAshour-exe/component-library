import {defineRecipe} from '@pandacss/dev'

export const modalRecipe = defineRecipe({
    className: "modal",
    description: "The Styles for the modal component",
    jsx: ["Modal"],
    base: {
        fontWeight: '500',
        color: 'blue',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        padding: '20px',
        boxShadow: ' 0 0 10px rgba(0, 0, 0, 0.5)',
        zIndex: '1000'
    },

    variants: {
        modal: {
            close: {
                fontWeight: 'bold',
                padding: '10px',
                cursor: 'pointer',
                backgroundColor: 'gray',
                marginBottom: '10px',
            },
        },
    }
})
