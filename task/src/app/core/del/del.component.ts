import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-del',
  template: `
    <form>
      <h3 matDialogTitle>{{title}}</h3>
      <div matDialogContent>
        <mat-label>是否删除</mat-label>
      </div>
      <div matDialogActions>
        <button mat-raised-button color="primary" type="button" (click)="onclick(true)">是</button>
        <button mat-raised-button color="warn" type="button" (click)="onclick(false)">否</button>
      </div>
    </form>
  `,
  styles: []
})
export class DelComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private result, private dialogRef: MatDialogRef<DelComponent>) {
  }

  title = '';

  ngOnInit() {

    console.log(this.result)
    this.title = this.result.title;
  }

  onclick(result: boolean) {

  this.dialogRef.close(result);
  }

}
