# Overview

* It is a sample using TypeScript Decorator.
* Use reflect-metadata to store information defined by Decorator.

# System requirements

* Node.js 10.x
* Yarn 1.12.x

# Used library

* TypeScript - 3.2.x
* Angular - 7.2.x
* reflect-metadata - 0.1.13

# Operation check

## 1. Download Sample

```
git clone git@github.com:yasu-s/ts-decorator-sample.git
```

## 2. Installing packages  

```
cd ts-decorator-sample
yarn
```

## 3. Launch sample application  

```
yarn start
```

# Sample source

## src/app/decorators/constants.ts

```typescript
/** MetaData Key: SampleClassDecorator */
export const METADATE_KEY_SAMPLE_CLASS_DECORATOR = 'SampleClassDecorator';

/** MetaData Key: SamplePropDecorator */
export const METADATE_KEY_SAMPLE_PROP_DECORATOR = 'SamplePropDecorator';
```

## src/app/decorators/sample-class.decorator.ts

```typescript
import { METADATE_KEY_SAMPLE_CLASS_DECORATOR } from './constants';

export interface SampleClass {
  memo?: string;
}

/** @Annotation */
export const SampleClass = (option?: SampleClass) => {
  return <TFunction extends Function>(target: TFunction) => {
    Reflect.defineMetadata(METADATE_KEY_SAMPLE_CLASS_DECORATOR, option, target);
    return target;
  };
};
```

## src/app/decorators/sample-prop.decorator.ts

```typescript
import { METADATE_KEY_SAMPLE_PROP_DECORATOR } from './constants';

/** @Annotation */
export const SampleProp = (memo?: string) => {
  return (target: any, propKey: string) => {
    Reflect.defineMetadata(METADATE_KEY_SAMPLE_PROP_DECORATOR, memo, target, propKey);
  };
};
```

## src/app/app.component.ts

```typescript
import { Component } from '@angular/core';

import { SampleClass } from './decorators/sample-class.decorator';
import { SampleProp } from './decorators/sample-prop.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@SampleClass({ memo: 'hoge' })
export class AppComponent {
  @SampleProp('hage')
  memo1 = '';
  @SampleProp('hige')
  memo2 = '';
}
```
