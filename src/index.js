import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import anime from 'animejs/lib/anime.es.js';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|\.|\')/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 500
  })
  .add({
    targets: '.ml11 .line1',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 3],
    easing: "easeOutExpo",
    duration: 650,
    delay: 300
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 34 * (i + 1)
  }, '-=700').add({
    targets: '.line',
    opacity: 0,
    duration: 300,
    easing: "easeOutExpo",
    delay: 100
  });

var textWrapper = document.querySelector('.ml12 .letters3');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|\.|\')/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .line_1',
    scaleY: [0,1],
    opacity: [0.3,1],
    easing: "easeOutExpo",
    duration: 500,
    delay: 1700
  })
  .add({
    targets: '.ml12 .line1',
    translateX: [0, document.querySelector('.ml12 .letters3').getBoundingClientRect().width + 170],
    easing: "easeOutExpo",
    duration: 650,
    delay: 300
  }).add({
    targets: '.ml12 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 34 * (i + 1)
  }, '-=700').add({
    targets: '.line_1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100
  }, '+=300');

var textWrapper = document.querySelector('.ml12 .letters2');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|\.|\')/g, "<span class='letter2'>$&</span>");

  anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter2',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 34 * (i + 1)
  }, '+=2640');