// import { makePropDecorator } from '@angular/core/src/util/decorators';

/**
 *
 */
export interface SamplePropDecorator {
  /**
   *
   */
  (memo?: string): any;

  /**
   *
   */
  new (memo?: string): any;
}

/**
 *
 */
export interface SampleProp {
  /** Memo */
  memo?: string;
}

/** */
// export const SampleProp: SamplePropDecorator = makePropDecorator('SampleProp', (memo?: string) => ({ memo }), undefined, undefined);
