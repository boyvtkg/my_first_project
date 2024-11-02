import React from 'react';
import { AiOutlineTransaction } from "react-icons/ai";
import { FaWpforms, FaFilter } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

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