
import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { MdFavoriteBorder } from "react-icons/md";
 import { FiPlay,FiCheck,FiLogOut } from "react-icons/fi";
export const NavBarItems = [
  {
    title: 'Favorites',
    path: '/',
    icon: <MdFavoriteBorder />,
    cName: 'nav-text'
  },
  {
    title: 'Watch Later',
    path: '/reports',
    icon: <FiPlay />,
    cName: 'nav-text'
  },
  {
    title: 'Recommended For You',
    path: '/recommended',
    icon: <FiCheck />,
    cName: 'nav-text'
  },
 
  {
    title: 'Logout',
    path: '/support',
    icon: <FiLogOut />,
    cName: 'nav-text'
  }
];