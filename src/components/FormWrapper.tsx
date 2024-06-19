import React from "react";
import { FC, ReactNode } from "react";

interface FormWrapperProps {
   children: ReactNode
};

const FormWrapper: FC<FormWrapperProps> = ({children}) => {
   return (
      <div className="login-wrapper">
         {children}
         <div className="lang-switcher">
            <span>RU</span>
            <span>EN</span>
         </div>
      </div>
   )
}

export default FormWrapper;