import {Component, OnInit, HostBinding} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProjectAddComponent} from '../project-add/project-add.component';
import {InviteComponent} from '../invite/invite.component';
import {DelComponent} from '../../core/del/del.component';
import {slideToRight} from '../../animate/route.ani';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    slideToRight
  ]
})
export class ProjectListComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  @HostBinding('@routerAnimate') state;

  projects = [
    {
      'name': '第一项目',
      'desc': '这是第一个项目',
      'CoverImg': 'assets/img/Emoji.jpg'
    },
    {
      'name': '第二项目',
      'desc': '这是第二个项目',
      'CoverImg': 'assets/img/0.jpg'
    }
  ]

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(ProjectAddComponent, {
      width: '250px',
      data: {title: '新建项目', data: 'this is data'}
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  openUpdateDialog() {
    const dialogRef = this.dialog.open(ProjectAddComponent, {
      width: '250px',
      data: {title: '编辑项目', data: 'this is data'}
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  openDelDialog() {
    const dialogRef = this.dialog.open(DelComponent, {
      width: '300px',
      data: {title: '删除项目'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openIviDialog() {
    const dialogRef = this.dialog.open(InviteComponent, {
      width: '250px',
      data: {data: 'this is data1'}
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
