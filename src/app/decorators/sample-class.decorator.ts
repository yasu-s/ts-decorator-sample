import { METADATE_KEY_SAMPLE_CLASS_DECORATOR } from './constants';

/**
 *
 */
export interface SampleClass {
  /** Memo */
  memo?: string;
}

/** @Annotation */
export const SampleClass = (option?: SampleClass) => {
  return <TFunction extends Function>(target: TFunction) => {
    Reflect.defineMetadata(METADATE_KEY_SAMPLE_CLASS_DECORATOR, option, target);
    return target;
  };
};
