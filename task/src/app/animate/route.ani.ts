import {trigger, state, transition, style, animate} from '@angular/animations';

export const slideToRight = trigger('routerAnimate', [
  // 定义void表示空状态下
  state('void', style({position: 'fixed', 'width': '100%', 'height': '100%'})),
  // * 表示任何状态
  state('*', style({position: 'fixed', 'width': '100%', 'height': '100%'})),
  // 进场动画
  transition(':enter', [
    style({transform: 'translate3d(-100%,0,0)'}),
    animate('.5s ease-in-out', style({transform: 'translate3d(0,0,0)'}))
  ]),
  // 出场动画
  transition(':leave', [
    style({transform: 'translate3d(0,0,0)'}),
    animate('.5s ease-in-out', style({transform: 'translate3d(100%,0,0)'}))
  ])
]);
