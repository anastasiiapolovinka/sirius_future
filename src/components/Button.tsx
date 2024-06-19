import React, { FC, ReactNode, SyntheticEvent } from "react";

interface ButtonProps {
   className?: string,
   type?: "submit" | "reset" | "button" | undefined,
   children?: ReactNode,
   onClick?: (e: SyntheticEvent) => void
};

const Button: FC<ButtonProps> = ({className, ...props}) => {
   return (
      <button className={`button ${className}`} {...props} ></button>
   )
}

export default Button;