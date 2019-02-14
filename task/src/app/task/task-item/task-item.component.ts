import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avator;
  @Output() updateItem = new EventEmitter<void>();

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

}
