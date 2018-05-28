// import $ from 'jquery';
import _ from 'lodash';
import style from './introduction.scss';
import mikuPNG from '../../assets/images/miku-q.png';

export default function introductionSection() {
  const $element = $('<div></div>');

  const $wrapper = $('<div/>', {
    class: 'wrap'
  });

  const $imgsContainer = $('<div/>', {
    class: 'imgsContainer'
  });
  const $imgs = [
    $('<img/>', {
      src: mikuPNG
    })
  ];
  $imgsContainer.append($imgs);

  const $box = $(
    `<div>
      <h2>初音未来的自我介绍</h2>
      <p>
        初音未来是世界上第一个使用全息投影技术举办演唱会的虚拟偶像。
        初音未来是日本当红的虚拟歌手，因为其清新可爱的形象而吸引了大量Fans。PSP平台的《初音未来：歌姬计划》是由SEGA发行的一款以初音未来为主角的音乐节奏游戏。
      </p>
    </div>`
  );
  $box.addClass('box');

  $wrapper.append($imgsContainer, $box);

  $element.addClass(style.introduction);
  $element.append($wrapper);

  return $element;
}
