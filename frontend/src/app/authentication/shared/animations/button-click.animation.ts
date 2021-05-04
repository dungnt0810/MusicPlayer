import {
  trigger,
  state,
  style,
  transition,
  animate,
  useAnimation,
  group,
} from '@angular/animations';
import {
  buttonHoldAnimation,
  buttonReleaseAnimation,
} from 'src/app/shared/animations/animations.animation';

export let clickTrigger = trigger('clickTrigger', [
  state(
    'mousedown',
    style({
      transform: 'scale3d(.97,.97,.97)',
      boxShadow: '0 5px 10px black',
    })
  ),
  transition(
    '* => mousedown',
    group([
      animate(
        `${0.75 * 0.18}s`,
        style({
          boxShadow: '0 5px 10px black',
        })
      ),
      useAnimation(buttonHoldAnimation, {
        params: {
          scale: '.97',
          duration: `${0.75 * 0.18}s`,
        },
      }),
    ])
  ),
  transition(
    'mousedown => *',
    group([
      animate(
        `${0.75 * 0.18}s`,
        style({
          boxShadow: '0 5px 12px black',
        })
      ),
      useAnimation(buttonReleaseAnimation, {
        params: {
          scale: '1.04',
          duration: `${0.75 * 0.55}s`,
        },
      }),
    ])
  ),
]);
