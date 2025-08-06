import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Users.css';
type User = {
  id: number;
  name: string;
  role: string;
  city: string;
  email: string;
  link: string;
  status: string;
  photo: string;
};

type FormData = {
  name: string;
  role: string;
  city: string;
  email: string;
  link: string;
  status: string;
};


export const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  /*Проверяет авторизацию, если не прошел перебрасывает на страницу с логином и паролем*/ 
  useEffect(() =>{
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [navigate])
  const [users, setUsers] = useState(
    [
        {/*Список пользователей*/ 
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
  /*Первоначальное состояние модального окна - закрыто*/
  const[ isModalOpen, setIsModalOpen] = useState(false);
  /*register — связывает поля ввода с формой (аналог name и onChange в ручном управлении).
    handleSubmit — обрабатывает отправку формы.
    reset — сбрасывает значения формы.
    errors — содержит ошибки валидации.*/ 
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    reset(); // Сброс формы
  };
 /*Отправка формы*/
  const onSubmit = (data: FormData) => {
    const newUser: User = {
      ...data,  // Берет данные из формы
      id: users.length + 1, //Новый id 
      photo: '/Avatar.png', //фото по умолчанию
    };
    setUsers([...users, newUser]);
    closeModal();
  };
  

  /*Удаление пользователей
  window.confirm - показывает окно с надписью и кнопками 
  120 строка - создание нового массива, без удаленного пользователя*/ 
  const DeleteUsers = (id:number) =>{
  if (window.confirm('Вы точно хотите удалить этого пользователя?')) {
    setUsers(nUsers => nUsers.filter(user => user.id !== id));
  }
  };
    /*Для поисковой строки - осуществляет поиск по ввсем столбцам таблицы*/ 
    const Users = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    /*Для 4 столбца - отобрвжения статуса с определенным цветом*/ 
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
  /*Что мы видим в итоге*/ 
  return (
    <div className='users_body'>
        <div className='users_con'>
          <input id='search' type='text' placeholder="🔍Поиск" className='search'
           onChange={(e) => setSearchTerm(e.target.value)} />
           {/*Добавление нового пользователя*/}
          <button className='add_user' onClick={openModal}>Добавить пользователя</button>
          {/*Модальное окно и форма для заполнения*/}
          {/*Модальное окно*/}

           <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className={'modal_window'}
          overlayClassName="modal-overlay"
        >{/*Сама форма заполнения*/}
          <form onSubmit={handleSubmit(onSubmit)} className='modal'>
                <div className="form-group">
              <label className='label_name'>Имя:</label>
              <input
                {...register("name", { required: "Обязательное поле" })}
                className={errors.name ? "error" : ""}
              />
              {errors.name && <span className="error-text">{errors.name.message}</span>}
               <label>Должность:</label>
              <input
                {...register("role", { required: "Обязательное поле" })}
              />
               <label>Город:</label>
              <input
                {...register("city", { required: "Обязательное поле" })}
              />
              <label>Email:</label>
              <input
                type="email"
                {...register("email")}
              />
               <label>Ссылка:</label>
              <input
                type="url"
                {...register("link")}
              />
            </div>
            <div className="form-group">
              <label>Статус:</label>
              <select {...register("status", { required: true })}>
                <option value="">Выберите статус</option>
                <option value="Verified" className='Verified'>Verified</option>
                <option value="Ongoing" className='Ongoing'>Ongoing</option>
                <option value="On Hold" className='On_Hold'>On Hold</option>
                <option value="Rejected" className='Rejected'>Rejected</option>
              </select>
            </div>

            <div className="form-buttons">
              <button type="submit" className="submit-btn">Добавить пользователя</button>
              <button type="button" onClick={closeModal} className="cancel-btn">Отмена</button>
            </div>
          </form>
        </Modal>  
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
              {/*Перебор массива пользователей*/}
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
                    <div className='actions_icon'>
                        <span><img src='/Cell Action Button.png' className='icon_1' alt=''></img></span>
                        <span onClick={() => DeleteUsers(user.id)}><img src='/Cell Action Button (1).png' className='icon_2' alt='' /></span>
                    </div>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>

       </div>
    </div>
  )
};

