import React, { FC } from "react";
import Button from "./Button";

const BalanceLessons: FC = () => {
   return (
      <div className="balans-lessons">
         <div className="balans-lessons-title">Баланс занятий</div>
         <div className="lessons">
            <span className="math-lesson">Ментальная Арифметика</span>
            <span className="programming-lesson">Программирование</span>
            <span className="reading-lesson">Скорочтение</span>
         </div>
         <Button className="lessons-btn">Button</Button>
      </div>
   );
} 

export default BalanceLessons;