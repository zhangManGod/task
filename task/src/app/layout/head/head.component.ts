import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDark = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  openSide() {

    this.toggle.emit();
  }

  changeDark(event) {
    this.toggleDark.emit(event.checked);
  }
}
