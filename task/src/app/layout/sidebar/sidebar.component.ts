import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() {
  }

  today = `DAYS`;

  ngOnInit() {
    this.today = `${this.today}${new Date().getDate()}`;
  }

}
