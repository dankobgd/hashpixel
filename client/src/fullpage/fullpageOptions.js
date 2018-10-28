import items from '../navigation/items';

const anchors = items.map(item => item.name);

export default {
  callbacks: ['onLeave'],
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors,
  menu: '.dotsList',
  navigation: false,
  navigationPosition: 'left',
  scrollOverflow: true,
  responsiveWidth: 980,
  afterResponsive: (isResponsive) => {
    console.log(`Is responsive: ${isResponsive}`);
  }
};
