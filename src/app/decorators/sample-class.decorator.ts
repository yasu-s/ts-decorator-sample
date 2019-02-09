import { TypeDecorator } from '@angular/core';
// import { makeDecorator } from '@angular/core/src/util/decorators';

/**
 *
 */
export interface SampleClassDecorator {
  /**
   *
   */
  (obj: SampleClass): TypeDecorator;

  /**
   *
   */
  new (obj: SampleClass): SampleClass;
}

/**
 *
 */
export interface SampleClass {
  /** Memo */
  memo?: string;
}

// /** */
// export const SampleClass: SampleClassDecorator = makeDecorator(
//   'SampleClass',
//   (cls: SampleClass = {}) => cls,
//   undefined,
//   undefined,
//   undefined,
// );

export const someClassDecorator = (option?: SampleClass) => {
  return <TFunc extends Function>(target: TFunc) => {
    Reflect.set(target, 'someClass', option);
    return target;
  };
};
