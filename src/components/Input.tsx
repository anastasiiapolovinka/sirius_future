import React, { FC, SyntheticEvent } from "react";

interface InputProps {
   type?: string,
   placeholder?: string,
   name?: string,
   value?: string,
   onChange?: (e: SyntheticEvent) => void,
   id?: string,
   className?: string,
   checked?: boolean
};

const Input: FC<InputProps> = (props) => {
   return (
      <input {...props}/>
   )
}

export default Input;