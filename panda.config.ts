import {defineConfig, defineTokens} from "@pandacss/dev"
import {checkboxRecipe} from "./components/checkbox/Checkbox.recipe"
import {breadcrumbsRecipe} from "./components/breadcrumbs/Breadcrumbs.recipe";
import {footerRecipe} from "@/components/footer/Footer.recipe";
import {accordionRecipe} from "./components/accordion/Accordion.recipe";
import {collapseRecipe} from "./components/collapse/Collapse.recipe";
import {dropDownRecipe} from "./components/dropdown/Dropdown.recipe";
import {outputsRecipe} from "@/components/outputs/Outputs.recipe";
import {modalRecipe} from "@/components/modal/Modal.recipe";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // The output directory for your css system
    outdir: "styled-system",

    // Useful for theme customization
    theme: {
        tokens: defineTokens({
            colors: {
                blue: {value: "#003460"},
                rose: {value: "#FBD2BE"},
                lightrose: {value: "#FDE8DF"},
                bluegray: {
                    0: {value: "#2A697F"},
                    1: {value: "#608CA1"},
                    15: {value: "#86A6B8"},
                    2: {value: "#AEC2CE"},
                    25: {value: "#C6D6E0"},
                    3: {value: "#E0EBF1"},
                    35: {value: "#F1F6F9"},
                },
                turquoise: {
                    1: {value: "#009BB7"},
                    2: {value: "#7ABCCF"},
                    3: {value: "#BEDBE7"},
                    4: {value: "#E3EFF4"},
                },
            },
        }),
        extend: {
            recipes: {
                checkbox: checkboxRecipe,
                breadcrumbs: breadcrumbsRecipe,
                footer: footerRecipe,
                accordion: accordionRecipe,
                collapse: collapseRecipe,
                dropdown: dropDownRecipe,
                outputs: outputsRecipe,
                modal: modalRecipe
            },
        },
    },
})
