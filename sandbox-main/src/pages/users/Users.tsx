import React, { useState } from 'react';
import './Users.css';


export const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');

    const users = [
        {
            id: 1,
            name: 'Balaji Nant',
            role: 'Lead Product Designer',
            city: 'Vancouver',
            email: 'ivan@doe.com',
            link: 'https://balajinant.com',
            status: 'Verified',
            photo: '/Avatar.png'
        },
        {
            id: 2,
            name: 'Nithya Menon',
            role: 'UI Designer',
            city: 'Bangalore',
            email: 'ivan@doe.com',
            link: 'project.com/user849',
            status: 'Ongoing',
            photo: '/43cfbecb1dd5d9652cd8deb9631a3ec2a0174a21.png'
        },
        {
          id:3,
          name: 'Meera Gonzalez',
          role: 'Product Designer',
          city: 'Toronto',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'On Hold',
          photo: '/43cfbecb1dd5d9652cd8deb9631a3ec2a0174a21.png'
        },
        {
          id:4,
          name: 'Karthik Subramanian',
          role: 'Sub Content',
          city: 'Coimbatore',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Ongoing',
          photo: '/43cfbecb1dd5d9652cd8deb9631a3ec2a0174a21.png'
        },
        {
          id:5,
          name: 'Mithra B',
          role: 'Product Designer',
          city: 'Vancouver',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Verified',
          photo: '/43cfbecb1dd5d9652cd8deb9631a3ec2a0174a21.png'
        },
        {
          id:6,
          name: 'Jagathesh Narayanan',
          role: 'Coimbatore',
          city: 'Coimbatore',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Rejected',
          photo: '/43cfbecb1dd5d9652cd8deb9631a3ec2a0174a21.png'
        },
        {
          id:7,
          name: 'Steve Rogers',
          role: 'Developer',
          city: 'Toronto',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Rejected',
          photo: '/43cfbecb1dd5d9652cd8deb9631a3ec2a0174a21.png'
        },
        {
          id:8,
          name: 'Richard Hendricks',
          role: 'Sr. Developer',
          city: 'Palo Alto',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Rejected',
          photo: '/43cfbecb1dd5d9652cd8deb9631a3ec2a0174a21.png'
        },
        {
          id:9,
          name: 'Monica Patel',
          role: 'UX Writer',
          city: 'Bangalore',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Rejected',
          photo: '/43cfbecb1dd5d9652cd8deb9631a3ec2a0174a21.png'
        },
        {
          id:10,
          name: 'Dinesh Kumar',
          role: 'Project Manager',
          city: 'Chennai',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Rejected',
          photo: '/43cfbecb1dd5d9652cd8deb9631a3ec2a0174a21.png'
        }


    ];
    const Users = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className='users_body'>
        <div className='users_con'>
          <input id='search' type='text' placeholder="🔍Поиск" className='search'
           onChange={(e) => setSearchTerm(e.target.value)} />
          <table className='users_table'>
            <thead className='table_head'>
            <tr>
              <th>Пользователь</th>
              <th>Город</th>
              <th>Ссылка</th>
              <th>Статус</th>
              <th>Действия</th>
            </tr>
            </thead>
            <tbody>
              {Users.map(user => (
                <tr key={user.id}>
                  <td>
                    <div className='user_text'>
                        <img src={user.photo} className='img' />
                        <div className='text_info'>
                            <p className='name_text'><strong>{user.name}</strong></p>
                            <p className='role_text'>{user.role}</p>
                        </div>
                    </div> 
                  </td>
                  <td className='city_text'>{user.city}</td>
                  <td className='link_text'><a
                  href={user.link}
                  target='_blank'>{user.link.replace(/^https?:\/\//, '')}</a></td>
                  <td className='status_text'>{user.status}</td>
                  <td className='actions_text'>
                    <div className='actions_icons'>
                        <span>✐</span><span>⌧</span>
                    </div>
                    </td>
                </tr>
              ))};


              {/*Users.map(user => (
                <>
                  <tr key={`${user.id}-main`}>
                    <td><img src={user.photo} className='img'/>
                      <td className='name_text'><strong>{user.name}</strong></td>
                    <tr key={`${user.id}-role`}>
                    <td className="role_text"colSpan={5}>{user.role}</td>
                  </tr>
                  </td>
                    
                    <td>{user.city}</td>
                    <td><a href={`https://${user.link}`}>{user.link}</a></td>
                    <td>{user.status}</td>
                    <td>✓</td>
                  </tr>
                  
                </>
              ))*/}
            </tbody>
            













          </table>
          

      {/*<div>
        Список пользователей

          {users.map((user) => (
              <>{user.id} {user.name} {user.name}</>
          ))}
      </div>*/}
       </div>
    </div>
  )
};

