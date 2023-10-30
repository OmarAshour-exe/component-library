/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface AccordionVariant {
  accordion: "title" | "active"
}

type AccordionVariantMap = {
  [key in keyof AccordionVariant]: Array<AccordionVariant[key]>
}

export type AccordionVariantProps = {
  [key in keyof AccordionVariant]?: ConditionalValue<AccordionVariant[key]>
}

export interface AccordionRecipe {
  __type: AccordionVariantProps
  (props?: AccordionVariantProps): string
  raw: (props?: AccordionVariantProps) => AccordionVariantProps
  variantMap: AccordionVariantMap
  variantKeys: Array<keyof AccordionVariant>
  splitVariantProps<Props extends AccordionVariantProps>(props: Props): [AccordionVariantProps, Pretty<DistributiveOmit<Props, keyof AccordionVariantProps>>]
}

/** The Styles for the accordion component */
export declare const accordion: AccordionRecipe