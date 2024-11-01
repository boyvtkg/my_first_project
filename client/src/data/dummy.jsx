import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';

export const links = [ 
  {
    title: 'Dashboard',
    links: [
      {
        name: 'submissionform',
        title: 'Submission Form',
        icon: <AiOutlineShoppingCart />
      },
      {
        name: 'transactions',
        title: 'Transactions',
        icon: <IoMdContacts />
      },
      {
        name: 'transfilter',
        title: 'Filter',
        icon: <RiContactsLine />
      },
    ]
  }
];