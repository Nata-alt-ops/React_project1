import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

/*Типы данных для полей ввода*/ 
type LoginForm = {
    username: string;
    password: string;
};

export const LoginForm = () =>{
    /*Для перехода между страницами*/
    const nav = useNavigate();
    const { 
    register, handleSubmit, formState:{ errors }, setError } = useForm<LoginForm>();

    /*Функция обработки*/
    const onSubmit = (data: LoginForm) => {
        if (data.username === 'user' && data.password === '12345'){
            localStorage.setItem('isAuthenticated', 'true');
            nav('/users')
        } else {
            /*Ошибка если пароль или логин не правильные*/
            setError('root', {
                type:'manual',
                message: "Неверный логин или пароль"
            });
        }
    };

    return(
        <div className='login_con'>
            <div className='login-con-form'>
                <h1 className='login_text_h1'>Вход</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
                    <label className='login-label1'>Логин:</label>
                    <input 
                    {...register('username', {required: 'Обязательное поле для заполнения'})}
                    className={errors.username ? 'error': ''} />
                    {errors.username && (<span className="error-text">{errors.username.message}</span>)}

                    <label className='login-label2'>Пароль:</label>
                    <input 
                    {...register('password', {required: 'Обязательное поле для заполнения'})}
                    className={errors.password ? 'error': ''} />
                    {errors.password && (<span className="error-text">{errors.password.message}</span>)}
                    <button type='submit' className='login_button'>Войти</button>
                </form>
                 
                
            </div>
        </div>
    )

} 

