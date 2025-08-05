import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.css';

/*Типы данных для полей ввода*/ 
type LoginForm = {
    username: string;
    password: string;
};

export const Login = () =>{
    /*Для перехода между страницами*/
    const nav = useNavigate();
    const { 
    register, handleSubmit, formState:{ errors }, setError } = useForm<LoginForm>();

    /*Фун*/ 

} 

