/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ModalVariant {
  modal: "close"
}

type ModalVariantMap = {
  [key in keyof ModalVariant]: Array<ModalVariant[key]>
}

export type ModalVariantProps = {
  [key in keyof ModalVariant]?: ConditionalValue<ModalVariant[key]>
}

export interface ModalRecipe {
  __type: ModalVariantProps
  (props?: ModalVariantProps): string
  raw: (props?: ModalVariantProps) => ModalVariantProps
  variantMap: ModalVariantMap
  variantKeys: Array<keyof ModalVariant>
  splitVariantProps<Props extends ModalVariantProps>(props: Props): [ModalVariantProps, Pretty<DistributiveOmit<Props, keyof ModalVariantProps>>]
}

/** The Styles for the modal component */
export declare const modal: ModalRecipe