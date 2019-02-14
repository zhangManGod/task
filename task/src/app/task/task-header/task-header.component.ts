import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header;
  @Output() addNewTask = new EventEmitter<void>();
  @Output() moveTasks = new EventEmitter<void>();
  @Output() addNewTaskList = new EventEmitter<void>();
  @Output() del = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  newTask() {
    this.addNewTask.emit();
  }

  moveTask() {
    this.moveTasks.emit();
  }

  onclick() {
    this.addNewTaskList.emit();
  }

  delTask() {
    this.del.emit();
  }

}
