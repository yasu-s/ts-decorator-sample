import { METADATE_KEY_SAMPLE_CLASS_DECORATOR, METADATE_KEY_SAMPLE_PROP_DECORATOR } from './constants';
import { SampleClass } from './sample-class.decorator';

/**
 *
 * @param cls
 */
export function getClassSampleMetadata(cls: any): SampleClass {
  if (!cls) {
    return null;
  }

  return Reflect.getMetadata(METADATE_KEY_SAMPLE_CLASS_DECORATOR, cls) as SampleClass;
}

/**
 *
 * @param target 対象オブジェクト
 * @param propKey プロパティキー
 */
export function getSamplePropMetadata(target: any, propKey: string): string {
  if (!target || !propKey) {
    return null;
  }

  return Reflect.getMetadata(METADATE_KEY_SAMPLE_PROP_DECORATOR, target, propKey) as string;
}
