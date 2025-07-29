import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import './Header.css';

export const Header = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const isActive = (name: string) => pathname === name;

  const navigateMenu = [
    {
      name: 'Пользователи',
      path: '/users',
    },
    {
      name: 'Новости',
      path: '/news',
    },
    ];

  return (
    <div className={'header'}>
      {navigateMenu.map((menu) => (
        <div onClick={() => navigate(menu.path)} className={isActive(menu.path) ? 'navigate-active' : 'navigate'}>
          <>{menu.name}</>
        </div>
      ))}
    </div>
  )
};
