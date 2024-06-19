import { Logo, FormTitle, Form, Input, Button, PasswordInput, CheckBox } from "../components";
import { Link, Navigate } from "react-router-dom";
import React, { FC, SyntheticEvent, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from "../store/userSlice";
import { UserStore } from "../store/types";

const initialFormState = {email: "", password: ""};

const FormContainer: FC = () => {
   const user = useSelector((state: UserStore) => state.user.value);
   const dispatch = useDispatch();
   const [formData, setFormData] = useState(initialFormState);
   const handleChange = (event: any) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
   const [isChecked, setIsChecked] = useState(false);

   const handleChangeChecked = (event: any) => {
      setIsChecked(event.target.checked);
   };
   const handleSubmit = (event: any) => {
      event.preventDefault();
      dispatch(updateUser(formData));
      setFormData(initialFormState);
      setIsChecked(false);
   };
   if (user) {
      return <Navigate to="/editor" replace={true}/>
   }
   return (
      <div className="login-container">
         <Logo/>
         <FormTitle/>
         <Form onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="E-mail" value={formData.email} onChange={handleChange}/>
            <PasswordInput name="password" value={formData.password} onChange={handleChange}/>
            <CheckBox checked={isChecked} onChange={handleChangeChecked}/>
            <Button className="login-btn" type="submit">Войти</Button>
         </Form>
         <div className="flex">
            <Link to='/'>Я забыл пароль</Link>
            <Link to='/'>Войти как тренер</Link>
         </div>
         <div className="flex column">
            <span>Нет аккаунта?</span>
            <Link to='/' className="padding-link">Зарегистрироваться</Link>
         </div>
      </div>
   )
}


export default FormContainer;