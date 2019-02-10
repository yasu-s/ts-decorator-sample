# 概要

* TypeScript の Decorator を使用したサンプルです。
* reflect-metadata を使用して Decorator で定義した情報を格納します。

# 実行環境

* Node.js 10.x
* Yarn 1.12.x


# 使用ライブラリ

* TypeScript - 3.2.x
* Angular - 7.2.x
* reflect-metadata - 0.1.13

# 動作確認

## 1. サンプルのダウンロード

```
git clone git@github.com:yasu-s/ts-decorator-sample.git
```

## 2. パッケージインストール  

```
cd ts-decorator-sample
yarn
```

## 3. サンプルの起動  

```
yarn start
```

# サンプルソース

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
