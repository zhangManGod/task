import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item;

  @Output() inviteflg = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
  }

  openUpdateDialog(event) {
    console.log(event);
  }

  openInviteDialog(event) {
    this.inviteflg.emit();
  }

  openDeleteDialog(event) {
    console.log(event);
  }
}
