import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

/*Типы данных для полей ввода*/ 
type LoginForm = {
    username: string;
    password: string;
};

type LoginFormProps  = {
    setIsAuthenticated: (value:boolean) => void;
};


export const LoginForm = ({setIsAuthenticated}: LoginFormProps)=>{
    /*Для перехода между страницами*/
    const navigate = useNavigate();
    const [authError, setAuthError] = useState('');
    const { 
    register, handleSubmit, formState:{ errors }, setError } = useForm<LoginForm>();

    /*Функция обработки*/
    const onSubmit = (data: LoginForm) => {
        /*console.log('Форма отправлена!', data);*/
        if (data.username === 'user' && data.password === '12345'){
            localStorage.setItem('isAuthenticated', 'true');
            setIsAuthenticated(true);
            navigate('/users');
        } else {
           setAuthError('Неверный логин или пароль');
            
        }
    };

    return(
        <div className='login_con'>
            <div className='login-con-form'>
                <h1 className='login_text_h1'>Вход</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='login-form'>
                    <label className='login-label1'>Логин:</label>
                    <input 
                    {...register('username', {required: 'Обязательное поле для заполнения'})}
                    className={errors.username ? 'error': ''} />
                    {authError && <span className="error-text" style={{ color: 'red' }}>{authError}</span>}

                    <label className='login-label2'>Пароль:</label>
                    <input 
                    {...register('password', {required: 'Обязательное поле для заполнения'})}
                    className={errors.password ? 'error': ''} />
                    {authError && <span className="error-text" style={{ color: 'red' }}>{authError}</span>}
                    <button type='submit'  className='login_button'>Войти</button>
                    </div>
                </form>
                 
                
            </div>
        </div>
    )

} 

