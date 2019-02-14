import {Component, OnInit, HostBinding} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {NewtaskComponent} from '../newtask/newtask.component';
import {CopyTaskComponent} from '../copy-task/copy-task.component';
import {NewListComponent} from '../new-list/new-list.component';
import {DelComponent} from '../../core/del/del.component';
import {slideToRight} from '../../animate/route.ani';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    slideToRight
  ]
})
export class TaskHomeComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) {
  }

  @HostBinding('@routerAnimate') state;

  lists = [
    {
      id: 1,
      name: '代办',
      task: [
        {
          id: 1,
          desc: '任务1 去买包辣条',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          complete: false,
          reminder: true,
          priority: 3
        },
        {
          id: 2,
          desc: '任务2 去买包薯片',
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
          complete: false,
          reminder: true,
          priority: 2
        },
      ]
    },
    {
      id: 2,
      name: '进行中',
      task: [
        {
          id: 1,
          desc: '任务1 去买3包辣条',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          complete: true,
          reminder: false,
          priority: 1
        },
        {
          id: 2,
          desc: '任务2 去买5包薯片',
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
          complete: true,
          reminder: false,
          priority: 3
        },
      ]
    },
  ];

  ngOnInit() {
  }

  openNewTasks() {

    const dialogRef = this.dialog.open(NewtaskComponent, {
      width: '300px',
      data: {title: '新建任务'}
    });
  }

  openMoveTasks() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {
      width: '300px',
      data: {data: this.lists}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openUpdateTasks(task: any) {

    const dialogRef = this.dialog.open(NewtaskComponent, {
      width: '300px',
      data: {title: '更改任务', data: task}
    });
  }

  newList() {
    const dialogRef = this.dialog.open(NewListComponent, {
      width: '300px',
      data: {title: '新建任务'}
    });
  }

  updateList() {
    const dialogRef = this.dialog.open(NewListComponent, {
      width: '300px',
      data: {title: '更改任务'}
    });
  }

  delTask() {
    const dialogRef = this.dialog.open(DelComponent, {
      width: '300px',
      data: {title: '删除任务List'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  returnProject() {
    this.router.navigateByUrl('/project');
  }

}
