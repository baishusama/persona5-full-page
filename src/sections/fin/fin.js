// import $ from 'jquery';
import _ from 'lodash';
import style from './fin.scss';

export default function finSection() {
  const $element = $('<div></div>');

  $element.text(_.join(['Good bye,', 'Miku'], ' '));
  $element.addClass(style.fin);

  return $element;
}
