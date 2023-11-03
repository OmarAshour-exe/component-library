/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface OutputsVariant {
  output: "li" | "secli"
}

type OutputsVariantMap = {
  [key in keyof OutputsVariant]: Array<OutputsVariant[key]>
}

export type OutputsVariantProps = {
  [key in keyof OutputsVariant]?: ConditionalValue<OutputsVariant[key]>
}

export interface OutputsRecipe {
  __type: OutputsVariantProps
  (props?: OutputsVariantProps): string
  raw: (props?: OutputsVariantProps) => OutputsVariantProps
  variantMap: OutputsVariantMap
  variantKeys: Array<keyof OutputsVariant>
  splitVariantProps<Props extends OutputsVariantProps>(props: Props): [OutputsVariantProps, Pretty<DistributiveOmit<Props, keyof OutputsVariantProps>>]
}

/** The Styles for the outputs component */
export declare const outputs: OutputsRecipe