import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item;

  @Output() inviteflg = new EventEmitter<void>();
  @Output() updateProject = new EventEmitter<void>();
  @Output() delProject = new EventEmitter<void>();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
    this.router.navigateByUrl('/task');
  }

  openUpdateDialog(env: Event) {
    this.updateProject.emit();
    env.stopPropagation();
  }

  openInviteDialog(env: Event) {
    this.inviteflg.emit();
    env.stopPropagation();
  }

  openDeleteDialog(env: Event) {
    this.delProject.emit();
    env.stopPropagation();
  }
}
