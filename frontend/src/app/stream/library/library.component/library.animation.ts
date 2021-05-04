import {
  trigger,
  style,
  state,
  transition,
  animate,
  query,
  group,
  animation,
  useAnimation,
} from '@angular/animations';

export let routeAnimation = trigger('routeAnimation', [
  transition(
    'playlist <=> artist, artist <=> album, album <=> playlist',
    [
      style({ position: 'relative' }),
      group([
        query(':enter', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            transform: 'translateX({{indexDiff}}%)',
            opacity: 0,
          }),
          animate('400ms ease'),
        ]),
        query(':leave', [
          style({ position: 'absolute', top: 0, left: 0, width: '100%' }),
          animate(
            '400ms ease',
            style({ transform: 'translateX({{rindexDiff}}%)', opacity: 0 })
          ),
        ]),
      ]),
    ],
    { params: { indexDiff: 100, rindexDiff: -100 } }
  ),
]);
