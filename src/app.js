// Styles
// import 'fullpage.js/dist/jquery.fullpage.css';
// require('fullpage.js/dist/jquery.fullpage.css');
import style from './style.scss';

// Libraries
import $ from 'jquery';
import 'fullpage.js/dist/jquery.fullpage.js';

// Components
import homeSection from './sections/home/home';
import introductionSection from './sections/introduction/introduction';
import sliderSection from './sections/slider/slider';
import finSection from './sections/fin/fin';

$(document).ready(() => {
  const $sections = [
    homeSection(),
    introductionSection(),
    sliderSection(),
    finSection()
  ];
  _.forEach($sections, ($section, i) => {
    $section.attr('id', `section${i}`);
    $section.addClass('section');
    // $section.addClass(style.section);
  });

  $('#fullpage')
    .append($sections)
    .fullpage({
      // 'css3': true,
      anchors: ['home', 'slider', 'fin'],
      // sectionsColor: [],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['Miku', 'Miku Slider', 'Miku Bye']
    });
});

/**
 * 下面是测试 webpack 的代码
 */

// const greeter = require('./Greeter.js');
// document.querySelector('#root').appendChild(greeter());

/*
  import $ from 'jquery';
  import _ from 'lodash';
  import printMe from './print.js';
  import style from './scss/style.scss';
  import Icon from './assets/images/site-logo.png';

  function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add(style.hello);

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    const btn = document.createElement('button');
    btn.innerHTML = 'Click then check console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
  }

  console.log('[test] $/jQuery :', $);
  $('#root').append(component());
  // document.body.appendChild();
*/
