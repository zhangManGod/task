import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-new-list',
  template: `
    <form>
      <h3 matDialogTitle>{{title}}</h3>
      <div matDialogContent>
        <mat-form-field class="full-width">
          <input matInput placeholder="任务名称" formControlName="name">
        </mat-form-field>
        <mat-form-field class="full-width">
          <input matInput placeholder="任务描述" formControlName="name">
        </mat-form-field>
      </div>
      <div matDialogActions>
        <button mat-raised-button color="primary" type="submit">OK</button>
      </div>
    </form>
  `,
  styles: []
})
export class NewListComponent implements OnInit {

  title = '';

  constructor(@Inject(MAT_DIALOG_DATA) private result) { }

  ngOnInit() {
    this.title = this.result.title;
  }

}
