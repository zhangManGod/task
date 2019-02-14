import {NgModule, Optional, SkipSelf} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {ShardModule} from '../shard/shard.module';
import {svgRegistry} from '../shard/svg.utils';
import {DelComponent} from './del/del.component';

@NgModule({
  imports: [
    ShardModule
  ],
  declarations: [DelComponent],
  entryComponents: [DelComponent]
})
export class CoreModule {

  constructor(
    ir: MatIconRegistry,
    ds: DomSanitizer,
    @Optional() @SkipSelf() parent: CoreModule) {

    if (parent) {
      throw new Error(`模块已经存在，不能在此加载`);
    }

    svgRegistry(ir, ds);
  }
}
