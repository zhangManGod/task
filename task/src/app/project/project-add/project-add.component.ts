import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data, private  dialogRdef: MatDialogRef<ProjectAddComponent>) {
  }

  dialogTitle = `新建项目`;

  ngOnInit() {
    console.log(JSON.stringify(this.data));
  }

  onclick() {
    this.dialogRdef.close('recived your message');
  }

}
