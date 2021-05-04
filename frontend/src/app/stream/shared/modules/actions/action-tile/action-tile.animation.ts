import {
  buttonReleaseAnimation,
  buttonHoldAnimation,
} from '../../../../../shared/animations/animations.animation';
import {
  transition,
  useAnimation,
  trigger,
  state,
  style,
  animate,
  keyframes,
} from '@angular/animations';

export let mousedownTrigger = trigger('mousedownTrigger', [
  state(
    'mousedown',
    style({
      transform: 'scale3d(.9,.9,.9)',
    })
  ),
  transition('* => mousedown', useAnimation(buttonHoldAnimation)),
  transition(
    'mousedown => *',
    animate(
      `${0.75 * 0.55}s ease`,
      keyframes([
        style({ offset: 0.5, transform: 'scale3d(1.1,1.1,1)' }),
        style({ offset: 0.9, transform: 'scale3d(1,1,1)' }),
      ])
    )
  ),
]);
