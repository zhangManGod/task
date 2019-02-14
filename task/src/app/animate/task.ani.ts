import {trigger, state, transition, style, animate} from '@angular/animations';

export const taskAnim = trigger('task', [
  state('out', style({ 'border-left-width': '3px'})),
  state('hover', style({'border-left-width': '9px'})),
  transition('out => hover', animate('0.1s ease-in')),
  transition('hover => out', animate('0.1s ease-out'))
])
