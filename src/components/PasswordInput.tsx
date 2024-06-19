import React, { FC, SyntheticEvent, useState } from "react";
import Input from "./Input";

interface PasswordProps {
   name: string,
   value: string,
   onChange: (e: SyntheticEvent) => void
};

const PasswordInput: FC<PasswordProps> = (props) => {
   const [type, setType] = useState('password');
   const iconClass = type === 'password' ? 'i-eye-slash' : 'i-eye';
   const handleTogglePass = () => {
      setType(type === 'password' ? 'text' : 'password');
   };

   return (
      <div className="passwordInput">
         <Input type={type} placeholder="Пароль" {...props}/>
         <span className={`passwordIcon ${iconClass}`} onClick={handleTogglePass}></span>
      </div>
   )
}

export default PasswordInput;