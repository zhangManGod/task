import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CoreModule} from './core/core.module';
import {ShardModule} from './shard/shard.module'
import {HttpClientModule} from '@angular/common/http'


import {AppComponent} from './app.component';
import { HeadComponent } from './layout/head/head.component';
import { FootComponent } from './layout/foot/foot.component';
import { MainComponent } from './layout/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CoreModule,
    ShardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
