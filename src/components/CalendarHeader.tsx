import React, { FC, useState } from "react";
// @ts-ignore
import chat_icon from "../assets/images/chat_icon.png";
// @ts-ignore
import avatar from "../assets/images/avatar.png";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Modal from "./Modal";
import { UserStore } from "../store/types";
 
const CalendarHeader: FC = () => {
   const user = useSelector((state: UserStore) => state.user.value);
   const [isOpen, setIsOpen ] = useState(false);

   const handleClick = () => {
      setIsOpen(!isOpen);
   }

   if (!user) {
      return <Navigate to="/login"/>
   }
   return (
      <div className="calendarHeader">
         <div>Добро пожаловать, {user.name}!</div>
         <div className="header-images">
         <img src={chat_icon} alt="chat_icon"/>
         <div className="avatar-icons" onClick={handleClick}>
            <img src={avatar} alt="avatar"/>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke="#7362BC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </div>
         <Modal isOpen={isOpen} handleClick={handleClick}/>
         </div>
      </div>
   )
}

export default CalendarHeader;