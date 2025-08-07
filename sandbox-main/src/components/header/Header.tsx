import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import { useEvent } from 'effector-react';
import { logout } from '../AuthGuard/auth';
import './Header.css';

export const Header = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const isActive = (name: string) => pathname === name;
  const logoutFn = useEvent(logout);

  const handleLogout = () => {
    logoutFn();
    navigate('/login'); // Перенаправляем на страницу входа
    window.location.reload();
  };

  const navigateMenu = [
    {
      name: 'Пользователи',
      path: '/users',
    },
    {
      name: 'Новости',
      path: '/news',
    },
    {
      name: 'О нас',
      path: '/about_us',
    },
    ];
   


  return (
    <div className={'header_con'}>
      <div className={'logo_nav_con'}>
        
        <div className={'logo'}>
          <div className='cirius'></div>
          <p className='logo_text'>Logo</p>
        </div>
        <div className={'header'}>
          {navigateMenu.map((menu) => (
            <div onClick={() => navigate(menu.path)} className={isActive(menu.path) ? 'navigate-active' : 'navigate'}>
              <>{menu.name}</>
            </div>
          ))}
          <div className='exit_button'>
           <button  className="exit" onClick={handleLogout} >Выход</button>
          </div>
        </div>
      </div>
    </div>
  )
};
