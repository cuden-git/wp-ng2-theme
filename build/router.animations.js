"use strict";
var core_1 = require('@angular/core');
// export function routerTransition() {
//     //return slideToLeft();
//     return trigger('routerTransition', [
//         state('void', style({position:'fixed', width:'100%'}) ),
//         state('*', style({position:'fixed', width:'100%'}) ),
//         transition(':enter', [
//         style({transform: 'translateX(100%)'}),
//         animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
//         ]),
//         transition(':leave', [
//         style({transform: 'translateX(0%)'}),
//         animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
//         ])
//     ]);
// }
// function slideToRight() {
//   return trigger('routerTransition', [
//     state('void', style({position:'fixed', width:'100%'}) ),
//     state('*', style({position:'fixed', width:'100%'}) ),
//     transition(':enter', [
//       style({transform: 'translateX(-100%)'}),
//       animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
//     ]),
//     transition(':leave', [
//       style({transform: 'translateX(0%)'}),
//       animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
//     ])
//   ]);
// }
// function slideToLeft() {
//   return trigger('routerTransition', [
//     state('void', style({position:'fixed', width:'100%'}) ),
//     state('*', style({position:'fixed', width:'100%'}) ),
//     transition(':enter', [
//       style({transform: 'translateX(100%)'}),
//       animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
//     ]),
//     transition(':leave', [
//       style({transform: 'translateX(0%)'}),
//       animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
//     ])
//   ]);
// }
exports.routerTransition = core_1.trigger('routerTransition', [
    core_1.state('void', core_1.style({ position: 'fixed', width: '100%' })),
    core_1.state('*', core_1.style({ position: 'fixed', width: '100%' })),
    core_1.transition(':enter', [
        core_1.style({ transform: 'translateX(100%)' }),
        core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(0%)' }))
    ]),
    core_1.transition(':leave', [
        core_1.style({ transform: 'translateX(0%)' }),
        core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(-100%)' }))
    ])
]);
//# sourceMappingURL=router.animations.js.map