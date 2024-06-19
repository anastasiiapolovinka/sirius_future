import Button from "./Button"
import { Link } from "react-router-dom";
// @ts-ignore
import avatarHolder from "../assets/images/avatar.png";
// @ts-ignore
import avatarHolderSecond from "../assets/images/avatar_holder.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/userSlice";
import React, { FC, SyntheticEvent } from "react";

interface ModalProps {
   isOpen: boolean,
   handleClick: (e: SyntheticEvent) => void
};

const Modal: FC<ModalProps> = ({isOpen, handleClick}) => {
   const dispatch = useDispatch();
   const handleLoguotUser = () => dispatch(logoutUser());
   return (
      <div className={`modal ${isOpen && "open"}`}>
         <Button onClick={handleClick} className="cross-icon"/>
         <span>Смена пользователя</span>
         <div className="modal-users">
            <Button className="modal-btn">
               <img className="avatar-holder" src={avatarHolder} alt="avatar" />
               <div className="holder-initial">
                  <span className="holder-name">Михаил</span>
                  <span className="holder">Это вы</span>
               </div>
            </Button>
            <Button className="modal-btn">
               <img className="avatar-holder" src={avatarHolderSecond} alt="avatar" />
               <span className="holder-name">Анна</span>
            </Button>
         </div>
         <div className="modal-exit-links">
            <Link to="/login" className="modal-exit" onClick={handleLoguotUser}>Выход</Link>
            <Link to="/login" className="modal-exit-icon" onClick={handleLoguotUser}/>
         </div>
      </div>
   )
}

export default Modal;