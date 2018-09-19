import {TweenMax, Elastic} from 'gsap';
const ANIMATION_DURATION = 0.35

const DEFUALT_DURATION = ANIMATION_DURATION;

const AnimationUtils = {
  fadeOut: (element, cb, duration) => {
    const timeout = duration || DEFUALT_DURATION;
    TweenMax.fromTo(element, timeout, {opacity: 1}, {opacity: 0, onComplete: cb})
  },

  fadeIn: (element, cb, duration) => {
    const timeout = duration || DEFUALT_DURATION;
    TweenMax.fromTo(element, timeout, {opacity: 0}, {opacity: 1, onComplete: cb})
  },

  fadeTo: ({element, cb, duration, opacity}) => {
    const timeout = duration || DEFUALT_DURATION;
    TweenMax.to(element, timeout, {opacity}, {onComplete: cb})
  },

  bounceUp: (element, cb, duration) => {
    const timeout = duration || DEFUALT_DURATION;
    TweenMax.set(element, {y: '100%'});
    TweenMax.to(element, timeout, {y: '0%', onComplete: cb})
  },

  bounceDown: (element, cb, duration) => {
    const timeout = duration || DEFUALT_DURATION;
    TweenMax.set(element, {y: '0%'});
    TweenMax.to(element, timeout, {y: '100%', onComplete: cb})
  },

  bounceLeft: (element, cb, duration) => {
    const timeout = duration || DEFUALT_DURATION;
    TweenMax.set(element, {x: '0%'});
    TweenMax.to(element, timeout, {x: '-100%', onComplete: cb})
  },

  bounceRight: (element, cb, duration) => {
    const timeout = duration || DEFUALT_DURATION;
    TweenMax.set(element, {x: '-100%'});
    TweenMax.to(element, timeout, {x: '0%', onComplete: cb})
  },

  moveTo: ({element, cb, duration, x, y}) => {
    const timeout = duration || DEFUALT_DURATION;
    TweenMax.to(element, timeout, {y, x, onComplete: cb})
  },

  collapse: (element, cb, duration) => {
    const timeout = duration || DEFUALT_DURATION;
    TweenMax.to(element, timeout, {height: 0, opacity: 0, onComplete: cb})
  },

  uncollapse: (element, cb, duration) => {
    const timeout = duration || DEFUALT_DURATION;
    TweenMax.set(element, {height:"auto"});
    TweenMax.from(element, timeout, {height: 0, opacity: 0, onComplete: cb});
  },

  scrollTo: (element, scrollTo, duration = DEFUALT_DURATION) => {
    TweenMax.to(element, duration, {scrollTo:{y:scrollTo}});
  },
};

export default AnimationUtils
