import {
  fadeInAnimation,
  fadeOutAnimation,
} from '../../../../shared/animations/animations.animation';
import {
  transition,
  useAnimation,
  trigger,
  state,
  style,
  animate,
  group,
} from '@angular/animations';

export const dialogTrigger = trigger('dialogTrigger', [
  transition(
    ':leave',
    group([
      useAnimation(fadeOutAnimation, { params: { duration: '150ms' } }),
      animate('150ms ease-in', style({ transform: 'scale3d(.9,.9,1)' })),
    ])
  ),
  transition(
    ':enter',
    group([
      style({
        transform: 'scale3d(.9,.9,1)',
        opacity: 0,
      }),
      useAnimation(fadeInAnimation, { params: { duration: '200ms' } }),
      animate('200ms ease-out', style({ transform: 'scale3d(1,1,1)' })),
    ])
  ),
]);
