import React, { FC } from "react";
import Button from "./Button";
import Clock from "./Clock";

const UpcomingLesson: FC = () => {
   const futureDate = new Date();
   futureDate.setDate(futureDate.getDate() + 7);
   return (
      <div className="upcoming-lesson">
         <h4 className="upcoming-lesson-title">Следующее занятие начнется через:</h4>
         <Clock targetDate={futureDate}/>
         <Button className="upcoming-lesson-btn">Button</Button>
      </div>
   );
} 

export default UpcomingLesson;