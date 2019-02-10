import { Component } from '@angular/core';

import { SampleClass } from './decorators/sample-class.decorator';
import { SampleProp } from './decorators/sample-prop.decorator';
import { getClassSampleMetadata, getSamplePropMetadata } from './decorators/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@SampleClass({ memo: 'hoge' })
export class AppComponent {
  /** */
  @SampleProp('hage')
  memo1 = '';
  /** */
  @SampleProp('hige')
  memo2 = '';

  /**
   *
   */
  onClick1(): void {
    const cls = getClassSampleMetadata(AppComponent);
    if (cls) {
      this.memo1 = cls.memo;
    }

    this.memo1 += ' - ' + getSamplePropMetadata(this, 'memo1');
  }

  /**
   *
   */
  onClick2(): void {
    this.memo2 = getSamplePropMetadata(this, 'memo2');
  }
}
