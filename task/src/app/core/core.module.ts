import {NgModule, Optional, SkipSelf} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {CommonModule} from '@angular/common';
import {svgRegistry} from '../shard/svg.utils'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
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
