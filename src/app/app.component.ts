import { Component } from '@angular/core';

import { SampleClass, someClassDecorator } from './decorators/sample-class.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@someClassDecorator({ memo: 'hoge' })
export class AppComponent {
  onClick(): void {}
}
