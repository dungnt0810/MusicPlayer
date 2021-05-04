import {
  floatOutAnimation,
  floatInAnimation,
} from '../../../../shared/animations/animations.animation';
import {
  trigger,
  style,
  state,
  animate,
  transition,
  useAnimation,
  group,
  query,
} from '@angular/animations';

export let floatOutTrigger = trigger('floatOutTrigger', [
  transition(':leave', useAnimation(floatOutAnimation)),
]);

export let floatInTrigger = trigger('floatInTrigger', [
  transition(':enter', useAnimation(floatInAnimation)),
]);
