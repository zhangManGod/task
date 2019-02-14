import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styleUrls: ['./copy-task.component.scss']
})
export class CopyTaskComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data,
              private  dialogRdef: MatDialogRef<CopyTaskComponent>) {
  }

  moveTasks: any[];
  title = '';

  ngOnInit() {
    console.log(this.data);
    this.moveTasks = this.data.data;
  }

  onClick() {
    this.dialogRdef.close('copy task close');
  }

}
