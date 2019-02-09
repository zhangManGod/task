import {NgModule} from '@angular/core';
import {ShardModule} from '../shard/shard.module';
import {ProjectRoutingModule} from './project-routing.moudle';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectItemComponent} from './project-item/project-item.component';
import {ProjectAddComponent} from './project-add/project-add.component';
import {ProjectDelComponent} from './project-del/project-del.component';
import { InviteComponent } from './invite/invite.component';

@NgModule({
  imports: [
    ShardModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectItemComponent,
    ProjectAddComponent,
    ProjectDelComponent,
    InviteComponent
  ],
  entryComponents: [
    ProjectAddComponent,
    ProjectDelComponent,
    InviteComponent]
})
export class ProjectModule {
}
