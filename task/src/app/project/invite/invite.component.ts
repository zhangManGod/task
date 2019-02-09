import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  constructor() {
  }

  dialogTitle = `邀请成员`;

  members = [
    {
      'id': '1',
      'name': 'zhangsan'
    },
    {
      'id': '2',
      'name': 'lisi'
    },
    {
      'id': '3',
      'name': 'wangwu'
    },
  ];

  ngOnInit() {
  }

  disPlayUser(user: { id: String, name: String }) {

    return user ? user.name : '';
  }

}
