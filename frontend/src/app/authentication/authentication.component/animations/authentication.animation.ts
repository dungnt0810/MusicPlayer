import {
  trigger,
  transition,
  style,
  group,
  query,
  animate,
} from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition(
    'signup <=> login',
    [
      group([
        query(':enter', [
          style({
            transform: 'translateX({{indexDiff}}%)',
            opacity: 0,
          }),
          animate('400ms ease'),
        ]),
        query(':leave', [
          style({ position: 'absolute' }),
          animate(
            '400ms ease',
            style({
              transform: 'translateX({{rindexDiff}}%)',
              opacity: 0,
            })
          ),
        ]),
      ]),
    ],
    { params: { indexDiff: 100, rindexDiff: -100 } }
  ),
]);
