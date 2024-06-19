import React, { FC, ReactNode, SyntheticEvent } from "react";

interface LogoProps {
   children: ReactNode,
   onSubmit: (e: SyntheticEvent) => void
};

const Form: FC<LogoProps> = ({children, ...props}) => {
   return (
      <form {...props}>
         {children}
      </form>
   )
}


export default Form;