import menuData from '../navigation/items';

const anchors = menuData.map(item => item.name);

export default {
  anchors,
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  callbacks: ['onLeave', 'afterResponsive'],
  menu: '.dots-list',
  navigation: false,
  navigationPosition: 'left',
  scrollOverflow: true,
  scrollingSpeed: 600,
  responsiveWidth: 980,
  normalScrollElements: '.slick-slider',
  controlArrows: false,
};
