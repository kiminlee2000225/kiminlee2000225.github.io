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
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|\.|')/g, "<span class='letter'>$&</span>");

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

var textWrapper1 = document.querySelector('.ml12 .letters3');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/([^\x00-\x80]|\w|\.|')/g, "<span class='letter'>$&</span>");

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
    translateX: [0, document.querySelector('.ml12 .letters3').getBoundingClientRect().width 
                  + document.querySelector('.ml12 .letters2').getBoundingClientRect().width],
    easing: "easeOutExpo",
    duration: 650,
    delay: 300
  }).add({
    targets: '.ml12 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 33 * (i + 1)
  }, '-=690').add({
    targets: '.line_1',
    opacity: 0,
    duration: 300,
    easing: "easeOutExpo",
    delay: 20
  }, '+=300');

var textWrapper2 = document.querySelector('.ml12 .letters2');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/([^\x00-\x80]|\w|\.|')/g, "<span class='letter2'>$&</span>");

  anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter2',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 33 * (i + 1)
  }, '+=2655');

var textWrapper3 = document.querySelector('.ml13 .letters4');
textWrapper3.innerHTML = textWrapper3.textContent.replace(/([^\x00-\x80]|\w|\.|')/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml13 .line_2',
    scaleY: [0,1],
    opacity: [0.3,1],
    easing: "easeOutExpo",
    duration: 500,
    delay: 3500
  })
  .add({
    targets: '.ml13 .line1',
    translateX: [0, document.querySelector('.ml13 .letters4').getBoundingClientRect().width 
                    + document.querySelector('.ml13 .letters5').getBoundingClientRect().width
                    + document.querySelector('.ml13 .letters6').getBoundingClientRect().width
                    + document.querySelector('.ml13 .letters7').getBoundingClientRect().width
                    + document.querySelector('.ml13 .letters8').getBoundingClientRect().width],
    easing: "easeOutExpo",
    duration: 1200,
    delay: 350
  }).add({
    targets: '.ml13 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 500,
    delay: (el, i) => 17 * (i + 1)
  }, '-=1200').add({
    targets: '.line_2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 200
  }, '+=300');

var textWrapper4 = document.querySelector('.ml13 .letters5');
textWrapper4.innerHTML = textWrapper4.textContent.replace(/([^\x00-\x80]|\w|\.|')/g, "<span class='letter5'>$&</span>");

  anime.timeline({loop: false})
  .add({
    targets: '.ml13 .letter5',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 200,
    delay: (el, i) => 17 * (i + 1)
  }, '+=4465');

var textWrapper5 = document.querySelector('.ml13 .letters6');
textWrapper5.innerHTML = textWrapper5.textContent.replace(/([^\x00-\x80]|\w|\.|')/g, "<span class='letter6'>$&</span>");

  anime.timeline({loop: false})
  .add({
    targets: '.ml13 .letter6',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 200,
    delay: (el, i) => 18 * (i + 1)
  }, '+=4620');

var textWrapper6 = document.querySelector('.ml13 .letters7');
textWrapper6.innerHTML = textWrapper6.textContent.replace(/([^\x00-\x80]|\w|\.|')/g, "<span class='letter7'>$&</span>");

anime.timeline({loop: false})
.add({
    targets: '.ml13 .letter7',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 20 * (i + 1)
}, '+=4675');

var textWrapper7 = document.querySelector('.ml13 .letters8');
textWrapper7.innerHTML = textWrapper7.textContent.replace(/([^\x00-\x80]|\w|\.|')/g, "<span class='letter8'>$&</span>");

anime.timeline({loop: false})
.add({
    targets: '.ml13 .letter8',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 20 * (i + 1)
}, '+=4797');