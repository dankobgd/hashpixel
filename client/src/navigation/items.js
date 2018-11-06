import React from 'react';
import {  defineMessages } from 'react-intl';


const menuItems = [
  {
    name: 'Home',
    page: 'Home',
    path: '/',
  },
  {
    name: 'WhoAreWe',
    page: 'Who Are We',
    path: '/about',
  },
  {
    name: 'OurTeam',
    page: 'Meet Our Team',
    path: '/team',
  },
  {
    name: 'WhatWeDo',
    page: 'What We Do',
    path: '/services',
  },
  {
    name: "Let'sWork",
    page: "Let's Work",
    path: '/contact',
  },
  {
    name: 'CompanyInfo',
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
      defaultMessage: "Let's work"
  }),
  defineMessages({
      id: 'Nav5',
      defaultMessage: 'Company Info'
  }),
];


export default menuItems;
