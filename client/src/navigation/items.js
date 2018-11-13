import { defineMessages } from 'react-intl';

const menuItems = [
  {
    name: 'Hashpixel',
    page: 'Home',
    path: '/',
  },
  {
    name: 'About',
    page: 'Who Are We',
    path: '/about',
  },
  {
    name: 'Team',
    page: 'Meet Our Team',
    path: '/team',
  },
  {
    name: 'Services',
    page: 'What We Do',
    path: '/services',
  },
  {
    name: 'Contact',
    page: "Let's Work Together",
    path: '/contact',
  },
  {
    name: 'Info',
    page: 'Company Info',
    path: '/info',
  },
];

export const dfns = [
  defineMessages({
    id: 'Navigation.item0',
    defaultMessage: 'Home',
  }),
  defineMessages({
    id: 'Navigation.item1',
    defaultMessage: 'Who Are We',
  }),
  defineMessages({
    id: 'Navigation.item2',
    defaultMessage: 'Meet Our Team',
  }),
  defineMessages({
    id: 'Navigation.item3',
    defaultMessage: 'What We Do',
  }),
  defineMessages({
    id: 'Navigation.item4',
    defaultMessage: "Let's work together",
  }),
  defineMessages({
    id: 'Navigation.item5',
    defaultMessage: 'Company Info',
  }),
];

export default menuItems;
