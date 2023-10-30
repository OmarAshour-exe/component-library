import { defineRecipe } from '@pandacss/dev'

export const dropDownRecipe = defineRecipe({
    className: "dropdown",
    description: "The Styles for the dropdown component",
    jsx: ["Dropdown"],
    base: {
        fontWeight: '400',
        color: 'black',
        margin: '10px',
        backgroundColor: '#e7e9eb',
        padding: '10px',
        border: '1px solid #606470'
    },
    variants: {
        dropdown: {
            title: { fontWeight: 'bold', cursor: 'pointer' },
            hover: { _hover: { backgroundColor: '#606470', color: 'white' } }
        },
    }
})
