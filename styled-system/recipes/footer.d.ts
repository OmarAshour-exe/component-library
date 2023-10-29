/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface FooterVariant {
  
}

type FooterVariantMap = {
  [key in keyof FooterVariant]: Array<FooterVariant[key]>
}

export type FooterVariantProps = {
  [key in keyof FooterVariant]?: ConditionalValue<FooterVariant[key]>
}

export interface FooterRecipe {
  __type: FooterVariantProps
  (props?: FooterVariantProps): string
  raw: (props?: FooterVariantProps) => FooterVariantProps
  variantMap: FooterVariantMap
  variantKeys: Array<keyof FooterVariant>
  splitVariantProps<Props extends FooterVariantProps>(props: Props): [FooterVariantProps, Pretty<DistributiveOmit<Props, keyof FooterVariantProps>>]
}

/** The Styles for the footer component */
export declare const footer: FooterRecipe