import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss']
})
export class NewtaskComponent implements OnInit {

  title = '';

  tasktypes = [
    {
      value: 1,
      label: '紧急'
    },
    {
      value: 2,
      label: '重要'
    },
    {
      value: 3,
      label: '普通'
    },
  ]

  constructor(@Inject(MAT_DIALOG_DATA) private result) {
  }

  ngOnInit() {
    this.title = this.result.title;
    console.log(this.result.data);
  }

}
