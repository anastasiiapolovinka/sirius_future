import React, { FC } from "react";
// @ts-ignore
import logo from "../assets/images/logo.png";
// @ts-ignore
import logoWithTitle from "../assets/images/logoWithTitle.png";

interface LogoProps {
   withTitle?: boolean
};

const Logo: FC<LogoProps> = ({withTitle = false, ...props}) => {
   return (
      <img src={withTitle ? logoWithTitle : logo} alt="logo" {...props}/>
   )
}

export default Logo;