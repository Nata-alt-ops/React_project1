import React from 'react';
import './Users.css';

export const Users = () => {

    const users = [
        {
            id: 1,
            name: 'Смирнов Иван',
            role: 'Lead Product Designer',
            city: 'Кострома',
            email: 'ivan@doe.com',
            link: 'https://balajinant.com',
            status: 'Active'
        },
        {
            id: 2,
            name: 'Смирнов Петр',
            role: 'Lead Product Designer',
            city: 'Кострома',
            email: 'ivan@doe.com',
            link: 'https://balajinant.com',
            status: 'Active'
        },

    ]

  return (
    <div>
      Список пользователей

        {users.map((user) => (
            <>{user.id} {user.name}</>
        ))}
    </div>
  )
};
