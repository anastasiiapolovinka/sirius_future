import React, { FC } from "react";
import Button from "./Button";

const FutureLessons: FC = () => {
   return (
      <div className="future-lessons">
         <div className="future-lessons-title">Ближайшие уроки</div>
         <div className="future-lessons-items">
            <div className="lesson-info">
               <div className="future-lasson-date">
                  <span className="future-lasson-day">1</span>
                  <span className="txt-small">мая</span>
               </div>
               <span className="lesson-name">Ментальная арифметика</span>
               <span className="txt-small lesson-time">14:00-14:25</span>
               <span className="txt-small lesson-teacher">Белкина Ирина</span>
               <div className="toggle-lesson-btns">
                  <Button className="toggle-lesson-btn">Button</Button>
                  <Button className="toggle-lesson-btn">Button</Button>
               </div>
            </div>
            <div className="lesson-info">
               <div className="future-lasson-date">
                  <span className="future-lasson-day">30</span>
                  <span className="txt-small">октября</span>
               </div>
               <span className="lesson-name">Программирование</span>
               <span className="txt-small lesson-time">11:00-11:11</span>
               <span className="txt-small lesson-teacher">Животноводская Оксана</span>
               <div className="toggle-lesson-btns">
                  <Button className="toggle-lesson-btn">Button</Button>
                  <Button className="toggle-lesson-btn">Button</Button>
               </div>
            </div>
            <div className="lesson-info">
               <div className="future-lasson-date">
                  <span className="future-lasson-day">16</span>
                  <span className="txt-small">ноября</span>
               </div>
               <span className="lesson-name">Скорочтение</span>
               <span className="txt-small lesson-time">09:00-09:45</span>
               <span className="txt-small lesson-teacher">Мин Елена</span>
               <div className="toggle-lesson-btns">
                  <Button className="toggle-lesson-btn">Button</Button>
                  <Button className="toggle-lesson-btn">Button</Button>
               </div>
            </div>
         </div>
         <Button className="future-lessons-btn">Button</Button>
      </div>
   )
} 

export default FutureLessons;