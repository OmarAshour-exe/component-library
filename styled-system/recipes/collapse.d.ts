/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface CollapseVariant {
  collapse: "title" | "active"
}

type CollapseVariantMap = {
  [key in keyof CollapseVariant]: Array<CollapseVariant[key]>
}

export type CollapseVariantProps = {
  [key in keyof CollapseVariant]?: ConditionalValue<CollapseVariant[key]>
}

export interface CollapseRecipe {
  __type: CollapseVariantProps
  (props?: CollapseVariantProps): string
  raw: (props?: CollapseVariantProps) => CollapseVariantProps
  variantMap: CollapseVariantMap
  variantKeys: Array<keyof CollapseVariant>
  splitVariantProps<Props extends CollapseVariantProps>(props: Props): [CollapseVariantProps, Pretty<DistributiveOmit<Props, keyof CollapseVariantProps>>]
}

/** The Styles for the collapse component */
export declare const collapse: CollapseRecipe