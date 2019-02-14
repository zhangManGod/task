import {NgModule} from '@angular/core';
import {ShardModule} from '../shard/shard.module';
import {TaskHomeComponent} from './task-home/task-home.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {TaskHeaderComponent} from './task-header/task-header.component';
import {TaskRoutingMoudle} from './task-routing.moudle';
import {NewtaskComponent} from './newtask/newtask.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';
import { NewListComponent } from './new-list/new-list.component';

@NgModule({
  imports: [
    ShardModule,
    TaskRoutingMoudle
  ],
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    NewtaskComponent,
    CopyTaskComponent,
    NewListComponent
  ],
  entryComponents: [
    NewtaskComponent,
    CopyTaskComponent,
    NewListComponent
  ]
})
export class TaskModule {
}
