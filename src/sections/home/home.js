import $ from 'jquery';
import _ from 'lodash';

// import style from '../../style.scss';
import style from './home.scss';
import mikuPNG from '../../assets/images/hatsune_miku_vector_by_bogskiii.png';

export default function homeSection() {
  const $element = $('<div/>');

  const $header = $('<h1/>', {
    text: 'Hatsune Miku' // 初音ミク／はつねミク
  });

  const $img = $('<img/>', {
    src: mikuPNG
  });

  $element.addClass(style.home);
  $element.append($header, $img);

  return $element;
}
