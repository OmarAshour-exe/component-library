/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface DropdownVariant {
  dropdown: "title" | "hover"
}

type DropdownVariantMap = {
  [key in keyof DropdownVariant]: Array<DropdownVariant[key]>
}

export type DropdownVariantProps = {
  [key in keyof DropdownVariant]?: ConditionalValue<DropdownVariant[key]>
}

export interface DropdownRecipe {
  __type: DropdownVariantProps
  (props?: DropdownVariantProps): string
  raw: (props?: DropdownVariantProps) => DropdownVariantProps
  variantMap: DropdownVariantMap
  variantKeys: Array<keyof DropdownVariant>
  splitVariantProps<Props extends DropdownVariantProps>(props: Props): [DropdownVariantProps, Pretty<DistributiveOmit<Props, keyof DropdownVariantProps>>]
}

/** The Styles for the dropdown component */
export declare const dropdown: DropdownRecipe