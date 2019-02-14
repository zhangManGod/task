import {Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {cardAnim} from '../../animate/card.ani';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {

  @Input() item;

  @Output() inviteflg = new EventEmitter<void>();
  @Output() updateProject = new EventEmitter<void>();
  @Output() delProject = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMoustEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMoustLeave() {
    this.cardState = 'out';
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
