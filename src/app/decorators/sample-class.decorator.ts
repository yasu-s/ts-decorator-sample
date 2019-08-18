import { ɵmakeDecorator } from '@angular/core';

import { METADATE_KEY_SAMPLE_CLASS_DECORATOR } from './constants';

/**
 *
 */
export interface SampleClass {
  /** Memo */
  memo?: string;
}

interface SampleClassDecoratorFactory {
  (data: SampleClass): any;
  new (data: SampleClass): SampleClass;
}

/** @Annotation */
export const SampleClass = ɵmakeDecorator(METADATE_KEY_SAMPLE_CLASS_DECORATOR, (data: any) => data) as SampleClassDecoratorFactory;
