import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ProjectAddComponent} from '../project-add/project-add.component';
import {InviteComponent} from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

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
      data: {data: 'this is data'}
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  openIviDialog() {
    const dialogRef = this.dialog.open(InviteComponent, {
      width: '250px',
      data: {data: 'this is data1'}
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
