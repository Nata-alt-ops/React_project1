import React, { useState } from 'react';
import './Users.css';


export const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState(
    [
        {
            id: 1,
            name: 'Balaji Nant',
            role: 'Lead Product Designer',
            city: 'Vancouver',
            email: 'ivan@doe.com',
            link: 'https://balajinant.com',
            status: 'Verified',
            photo: '/avatar1.jpg'
        },
        {
            id: 2,
            name: 'Nithya Menon',
            role: 'UI Designer',
            city: 'Bangalore',
            email: 'ivan@doe.com',
            link: 'project.com/user849',
            status: 'Ongoing',
            photo: '/avatar2.png'
        },
        {
          id:3,
          name: 'Meera Gonzalez',
          role: 'Product Designer',
          city: 'Toronto',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'On Hold',
          photo: '/avatar3.png'
        },
        {
          id:4,
          name: 'Karthik Subramanian',
          role: 'Sub Content',
          city: 'Coimbatore',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Ongoing',
          photo: '/Avatar.png'
        },
        {
          id:5,
          name: 'Mithra B',
          role: 'Product Designer',
          city: 'Vancouver',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Verified',
          photo: '/Avatar.png'
        },
        {
          id:6,
          name: 'Jagathesh Narayanan',
          role: 'Coimbatore',
          city: 'Coimbatore',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Rejected',
          photo: '/avatar6.jpg'
        },
        {
          id:7,
          name: 'Steve Rogers',
          role: 'Developer',
          city: 'Toronto',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Verified',
          photo: '/avatar7.jpg'
        },
        {
          id:8,
          name: 'Richard Hendricks',
          role: 'Sr. Developer',
          city: 'Palo Alto',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'On Hold',
          photo: '/avatar8.jpg'
        },
        {
          id:9,
          name: 'Monica Patel',
          role: 'UX Writer',
          city: 'Bangalore',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'On Hold',
          photo: '/avatar9.jpg'
        },
        {
          id:10,
          name: 'Dinesh Kumar',
          role: 'Project Manager',
          city: 'Chennai',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Verified',
          photo: '/avatar10.jpg'
        },
        


    ]

  );
  /*Удалаяет пользователей
  window.confirm - показывает окно с надписью и кнопками 
  120 строка - создание нового массива, без удаленного пользователя*/ 
  const DeleteUsers = (id:number) =>{
  if (window.confirm('Вы точно хотите удалить этого пользователя?')) {
    setUsers(newUsers => newUsers.filter(user => user.id !== id));
  }
  };

    /*const users = [
        {
            id: 1,
            name: 'Balaji Nant',
            role: 'Lead Product Designer',
            city: 'Vancouver',
            email: 'ivan@doe.com',
            link: 'https://balajinant.com',
            status: 'Verified',
            photo: '/avatar1.jpg'
        },
        {
            id: 2,
            name: 'Nithya Menon',
            role: 'UI Designer',
            city: 'Bangalore',
            email: 'ivan@doe.com',
            link: 'project.com/user849',
            status: 'Ongoing',
            photo: '/avatar2.png'
        },
        {
          id:3,
          name: 'Meera Gonzalez',
          role: 'Product Designer',
          city: 'Toronto',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'On Hold',
          photo: '/avatar3.png'
        },
        {
          id:4,
          name: 'Karthik Subramanian',
          role: 'Sub Content',
          city: 'Coimbatore',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Ongoing',
          photo: '/Avatar.png'
        },
        {
          id:5,
          name: 'Mithra B',
          role: 'Product Designer',
          city: 'Vancouver',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Verified',
          photo: '/Avatar.png'
        },
        {
          id:6,
          name: 'Jagathesh Narayanan',
          role: 'Coimbatore',
          city: 'Coimbatore',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Rejected',
          photo: '/avatar6.jpg'
        },
        {
          id:7,
          name: 'Steve Rogers',
          role: 'Developer',
          city: 'Toronto',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Verified',
          photo: '/avatar7.jpg'
        },
        {
          id:8,
          name: 'Richard Hendricks',
          role: 'Sr. Developer',
          city: 'Palo Alto',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'On Hold',
          photo: '/avatar8.jpg'
        },
        {
          id:9,
          name: 'Monica Patel',
          role: 'UX Writer',
          city: 'Bangalore',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'On Hold',
          photo: '/avatar9.jpg'
        },
        {
          id:10,
          name: 'Dinesh Kumar',
          role: 'Project Manager',
          city: 'Chennai',
          email: 'ivan@doe.com',
          link: 'project.com/user849',
          status: 'Verified',
          photo: '/avatar10.jpg'
        },
        


    ];*/
    const Users = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const getStatus = (status:string) =>{
      switch(status){
        case 'Verified':
          return{ 
            backgroundColor: '#C9E8E8', 
            color: '#105352',
            padding: '4px 8px',
            borderRadius: '1px',
            minWidth: '75px',
            minHeight:'29px',
          };
        case 'Ongoing':
          return{ backgroundColor: '#CBDCF9', color: '#103680',
            padding: '4px 8px',
            borderRadius: '1px',
            minWidth: '75px',
            minHeight:'29px',
           };
        case 'On Hold':
          return{ backgroundColor: '#FFF3DD', color: '#AA8345',
            padding: '4px 8px',
            borderRadius: '1px',
            minWidth: '75px',
            minHeight:'29px',
           };
        case 'Rejected':
          return{ backgroundColor: '#F3D4D1', color: '#70241D',
            padding: '4px 8px',
            borderRadius: '1px',
            minWidth: '75px',
            minHeight:'29px',
           };
      }
    };
    


  return (
    <div className='users_body'>
        <div className='users_con'>
          <input id='search' type='text' placeholder="🔍Поиск" className='search'
           onChange={(e) => setSearchTerm(e.target.value)} />
          <div className='table_con'>
          <table className='users_table'>
            <thead className='table_head'>
            <tr>
              <th>Пользователь</th>
              <th>Город</th>
              <th>Ссылка</th>
              <th>Статус</th>
              <th className='actions'>Действия</th>
            </tr>
            </thead>
            <tbody>
              {Users.map(user => (
                <tr key={user.id}>
                  <td>
                    <div className='user_text'>
                        <img src={user.photo} className='img' alt='' />
                        <div className='text_info'>
                            <p className='name_text'><strong>{user.name}</strong></p>
                            <p className='role_text'>{user.role}</p>
                        </div>
                    </div> 
                  </td>
                  <td className='city_text'>{user.city}</td>
                  <td className='link_text'><a
                  href={user.link}
                  target='_blank' rel="noreferrer noopener">{user.link.replace(/^https?:\/\//, '')}</a></td>
                  <td className='status_text' >
                    <span style={getStatus(user.status)}>{user.status}</span></td>
                  <td className='actions_text'>
                    <div className='actions_icons'>
                        <span><img src='/Cell Action Button.png' className='icon_1' alt=''></img></span>
                        <span onClick={() => DeleteUsers(user.id)}><img src='/Cell Action Button (1).png' className='icon_2' alt='' /></span>
                    </div>
                    </td>
                </tr>
              ))}
              
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
          </div>
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

