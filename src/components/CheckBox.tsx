import React, { FC, SyntheticEvent } from "react";
import Input from "./Input";

interface CheckBoxProps {
   checked: boolean,
   onChange: (e: SyntheticEvent) => void
};

const CheckBox: FC<CheckBoxProps> = ({checked, ...props}) => {
   return (
      <label className="label check-box-label" htmlFor="check-box">
         <Input id="check-box" className="check-box" type="checkbox" checked={checked} { ...props}/>
         <span className="txt-small">Запомнить меня</span>
      </label>
   )
}


export default CheckBox;