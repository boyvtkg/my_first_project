import React from 'react';
import { AiOutlineTransaction } from "react-icons/ai";
import { FaWpforms, FaFilter } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { FiCreditCard } from 'react-icons/fi';
export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'submissionform',
        title: 'Submission Form',
        icon: <FaWpforms />
      },
      {
        name: 'transactions',
        title: 'Transactions',
        icon: <AiOutlineTransaction />
      },
      {
        name: 'transfilter',
        title: 'Filter',
        icon: <IoFilter />
      },
    ]
  }
];

export const themeColors = [
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];