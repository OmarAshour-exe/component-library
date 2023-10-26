/* eslint-disable */
export type Token = "colors.blue" | "colors.rose" | "colors.lightrose" | "colors.bluegray.0" | "colors.bluegray.1" | "colors.bluegray.2" | "colors.bluegray.3" | "colors.bluegray.15" | "colors.bluegray.25" | "colors.bluegray.35" | "colors.turquoise.1" | "colors.turquoise.2" | "colors.turquoise.3" | "colors.turquoise.4" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "colors.colorPalette.0" | "colors.colorPalette.1" | "colors.colorPalette.2" | "colors.colorPalette.3" | "colors.colorPalette.15" | "colors.colorPalette.25" | "colors.colorPalette.35" | "colors.colorPalette.4"

export type ColorPalette = "bluegray" | "turquoise"

export type ColorToken = "blue" | "rose" | "lightrose" | "bluegray.0" | "bluegray.1" | "bluegray.2" | "bluegray.3" | "bluegray.15" | "bluegray.25" | "bluegray.35" | "turquoise.1" | "turquoise.2" | "turquoise.3" | "turquoise.4" | "colorPalette.0" | "colorPalette.1" | "colorPalette.2" | "colorPalette.3" | "colorPalette.15" | "colorPalette.25" | "colorPalette.35" | "colorPalette.4"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type AnimationName = "spin" | "ping" | "pulse" | "bounce"

export type Tokens = {
		colors: ColorToken
		breakpoints: BreakpointToken
		sizes: SizeToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"