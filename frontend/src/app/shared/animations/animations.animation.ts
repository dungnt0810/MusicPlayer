import {
  style,
  animate,
  animation,
  keyframes,
  trigger,
  state,
  transition,
  group,
  useAnimation,
} from '@angular/animations';

export let floatInAnimation = animation(
  [
    style({ transform: 'translateY(25px)', opacity: 0 }),
    animate('{{ duration }} {{ timing }}'),
  ],
  {
    params: {
      duration: '200ms',
      timing: 'ease-out',
    },
  }
);

export let floatOutAnimation = animation(
  animate(
    '{{ duration }} {{ timing }}',
    style({
      opacity: 0,
      transform: 'translateY(25px)',
    })
  ),
  {
    params: {
      duration: '150ms',
      timing: 'ease-in',
    },
  }
);

export let fadeInAnimation = animation(
  animate('{{ duration }} {{ timing }}', style({ opacity: 1 })),
  {
    params: {
      duration: '200ms',
      timing: 'ease-out',
    },
  }
);

export let fadeOutAnimation = animation(
  animate('{{ duration }} {{ timing }}', style({ opacity: 0 })),
  {
    params: {
      duration: '150ms',
      timing: 'ease-in',
    },
  }
);

export let buttonHoldAnimation = animation(
  animate(
    '{{ duration }} ease',
    style({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})' })
  ),
  {
    params: {
      duration: `${0.75 * 0.2}s`,
      scale: '0.9',
    },
  }
);

export let buttonReleaseAnimation = animation(
  animate(
    '{{ duration }} ease',
    keyframes([
      style({
        offset: 0.35,
        transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})',
      }),
      style({ offset: 0.7, transform: 'scale3d(1,1,1)' }),
    ])
  ),
  {
    params: {
      duration: `${0.75 * 0.8}s`,
      scale: '1.1',
    },
  }
);
