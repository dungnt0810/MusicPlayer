import {
  buttonHoldAnimation,
  buttonReleaseAnimation,
} from '../../../../shared/animations/animations.animation';

import {
  transition,
  useAnimation,
  trigger,
  state,
  style,
  group,
  animate,
} from '@angular/animations';

export let mousedownTrigger = trigger('mousedownTrigger', [
  state(
    'mousedown',
    style({
      transform: 'scale3d(.96,.96,.96)',
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
          scale: '.96',
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
          scale: '1.05',
          duration: `${0.75 * 0.55}s`,
        },
      }),
    ])
  ),
]);
