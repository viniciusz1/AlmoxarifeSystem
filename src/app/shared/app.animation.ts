import { trigger, transition, style, animate } from '@angular/animations';
export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('300ms', style({'margin-left': '0%', 'height': '100%', 'opacity': '1' }))]
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('200ms', style({'margin-left': '0%', 'height': '100%', 'opacity': '0' }))]
  )
]);


// nav {
//     animation-duration: 1s;
//     animation-name: slidein;
//     animation-delay: calc(var(--scroll) * -1s);
//     scroll-snap-type: proximity;
//     // position: fixed;
//     /* make sure it stays put so we can see it! */

//     // animation: slidein 1s linear infinite;
//     // animation-play-state: paused;
// }

// @keyframes slidein {
//     from {
//         margin-top: 100%;
//         height: 300%;
//     }

//     to {
//         margin-top: 0%;
//         height: 100%;
//     }
// }