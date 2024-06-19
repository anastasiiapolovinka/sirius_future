import React, { FC } from "react";
import Button from "./Button";
import SelectSubject from "./SelectSubject";

const CalendarChenging: FC = () => {
   return (
      <div className="calendar-chenging">
         <SelectSubject/>
         <Button className="calendar-chenging-btn">Изменить расписание</Button>
      </div>
   )
}

 export default CalendarChenging;