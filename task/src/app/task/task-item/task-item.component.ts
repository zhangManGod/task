import {Component, OnInit, Input, Output, EventEmitter, HostListener} from '@angular/core';
import {taskAnim} from '../../animate/task.ani';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    taskAnim
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avator;
  @Output() updateItem = new EventEmitter<void>();
  widerPriority = 'out'
  constructor() {
  }

  ngOnInit() {
  }

  updateTask() {
    this.updateItem.emit();
  }

  onlyCheck(env: Event) {

    env.stopPropagation();
  }

  @HostListener('mouseenter')
  onMoustEnter() {
    this.widerPriority = 'hover';
  }

  @HostListener('mouseleave')
  onMoustLeave() {
    this.widerPriority = 'out';
  }

}
