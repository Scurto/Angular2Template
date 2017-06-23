import {style, state, animate, transition, trigger, keyframes} from "@angular/core";
export const PRETTY_ANIMATION = trigger('heroState', [
    state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
    })),
    state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
]);



export const TEST_ANIMATION = trigger('visibility', [
    state('shown', style({
        height: '200px'
    })),
    state('hidden', style({
        height: '0'
    })),
    transition('* => *', animate('.5s'))


    // bounceOutLeft
    // transition('shown => hidden', animate('100ms ease-in')),
    // transition('hidden => shown', animate('100ms ease-out'))

]);

export const TEST_ANIMATION_KEYFRAME = trigger('movePanel', [

    transition('void => *', [
        animate(600, keyframes([
            style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
            style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        ]))
    ])

])
