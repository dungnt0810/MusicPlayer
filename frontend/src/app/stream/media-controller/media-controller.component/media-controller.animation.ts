import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const mediaTrigger = trigger('mediaTrigger', [
  state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
  state('hidden', style({ transform: 'translateY(90px)', opacity: 1 })),

  transition('visible => hidden', [animate('150ms ease-in')]),
  transition('hidden => visible', [animate('150ms ease-out')]),
]);
