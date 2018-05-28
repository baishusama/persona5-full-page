// import $ from 'jquery';
import _ from 'lodash';
import style from './slider.scss';

export default function sliderSection() {
  const $element = $('<div></div>');
  $element.addClass(style.slider);
  $element.text(_.join(['Miku', 'Slider'], ' '));

  const $slide1 = $('<div/>', {
    // id: 'slide1',
    // class: ['slide', style.slide1].join(' '),
    text: '寂静~~pease~~'
  });
  const $slide2 = $('<div/>', {
    text: '一叶知秋'
  });
  const $slides = [$slide1, $slide2];
  _.forEach($slides, ($slide, i) => {
    $slide.attr('id', `slide${i}`);
    $slide.addClass(['slide', style[`slide${i + 1}`]].join(' '));
  });

  $element.append($slides);

  return $element;
}
