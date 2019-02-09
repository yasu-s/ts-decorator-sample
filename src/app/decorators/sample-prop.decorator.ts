import { METADATE_KEY_SAMPLE_PROP_DECORATOR } from './constants';

/** @Annotation */
export const SampleProp = (memo?: string) => {
  return (target: any, propKey: string) => {
    Reflect.defineMetadata(METADATE_KEY_SAMPLE_PROP_DECORATOR, memo, target, propKey);
  };
};
