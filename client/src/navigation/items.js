import {  defineMessages } from 'react-intl';


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
    name: "Contact",
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
      id: 'Nav0',
      defaultMessage: 'Home'
  }),
  defineMessages({
      id: 'Nav1',
      defaultMessage: 'Who Are We'
  }),
  defineMessages({
      id: 'Nav2',
      defaultMessage: 'Meet Our Team'
  }),
  defineMessages({
      id: 'Nav3',
      defaultMessage: 'What We Do'
  }),
  defineMessages({
      id: 'Nav4',
      defaultMessage: "Let's work together"
  }),
  defineMessages({
      id: 'Nav5',
      defaultMessage: 'Company Info'
  }),
];


export default menuItems;
