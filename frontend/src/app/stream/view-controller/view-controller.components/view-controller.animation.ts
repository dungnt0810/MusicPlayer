import {
  fadeInAnimation,
  fadeOutAnimation,
} from '../../../shared/animations/animations.animation';
import {
  trigger,
  style,
  state,
  useAnimation,
  transition,
  animate,
} from '@angular/animations';

export let fadeTrigger = trigger('fadeTrigger', [
  state(
    'void',
    style({
      opacity: 0,
    })
  ),
  transition(':enter', useAnimation(fadeInAnimation)),
  transition(':leave', useAnimation(fadeOutAnimation)),
]);

export let blurTrigger = trigger('blurTrigger', [
  state(
    'void',
    style({
      filter: 'blur(0)',
      backgroundColor: 'transparent',
    })
  ),
  state('*', style({ filter: 'blur(5px)', backgroundColor: '*' })),
  transition(':enter', animate('200ms ease-out')),
  transition(':leave', animate('150ms ease-in')),
]);
