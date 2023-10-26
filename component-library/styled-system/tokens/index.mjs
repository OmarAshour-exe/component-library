const tokens = {
  "colors.blue": {
    "value": "#003460",
    "variable": "var(--colors-blue)"
  },
  "colors.rose": {
    "value": "#FBD2BE",
    "variable": "var(--colors-rose)"
  },
  "colors.lightrose": {
    "value": "#FDE8DF",
    "variable": "var(--colors-lightrose)"
  },
  "colors.bluegray.0": {
    "value": "#2A697F",
    "variable": "var(--colors-bluegray-0)"
  },
  "colors.bluegray.1": {
    "value": "#608CA1",
    "variable": "var(--colors-bluegray-1)"
  },
  "colors.bluegray.2": {
    "value": "#AEC2CE",
    "variable": "var(--colors-bluegray-2)"
  },
  "colors.bluegray.3": {
    "value": "#E0EBF1",
    "variable": "var(--colors-bluegray-3)"
  },
  "colors.bluegray.15": {
    "value": "#86A6B8",
    "variable": "var(--colors-bluegray-15)"
  },
  "colors.bluegray.25": {
    "value": "#C6D6E0",
    "variable": "var(--colors-bluegray-25)"
  },
  "colors.bluegray.35": {
    "value": "#F1F6F9",
    "variable": "var(--colors-bluegray-35)"
  },
  "colors.turquoise.1": {
    "value": "#009BB7",
    "variable": "var(--colors-turquoise-1)"
  },
  "colors.turquoise.2": {
    "value": "#7ABCCF",
    "variable": "var(--colors-turquoise-2)"
  },
  "colors.turquoise.3": {
    "value": "#BEDBE7",
    "variable": "var(--colors-turquoise-3)"
  },
  "colors.turquoise.4": {
    "value": "#E3EFF4",
    "variable": "var(--colors-turquoise-4)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "colors.colorPalette.0": {
    "value": "var(--colors-color-palette-0)",
    "variable": "var(--colors-color-palette-0)"
  },
  "colors.colorPalette.1": {
    "value": "var(--colors-color-palette-1)",
    "variable": "var(--colors-color-palette-1)"
  },
  "colors.colorPalette.2": {
    "value": "var(--colors-color-palette-2)",
    "variable": "var(--colors-color-palette-2)"
  },
  "colors.colorPalette.3": {
    "value": "var(--colors-color-palette-3)",
    "variable": "var(--colors-color-palette-3)"
  },
  "colors.colorPalette.15": {
    "value": "var(--colors-color-palette-15)",
    "variable": "var(--colors-color-palette-15)"
  },
  "colors.colorPalette.25": {
    "value": "var(--colors-color-palette-25)",
    "variable": "var(--colors-color-palette-25)"
  },
  "colors.colorPalette.35": {
    "value": "var(--colors-color-palette-35)",
    "variable": "var(--colors-color-palette-35)"
  },
  "colors.colorPalette.4": {
    "value": "var(--colors-color-palette-4)",
    "variable": "var(--colors-color-palette-4)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar