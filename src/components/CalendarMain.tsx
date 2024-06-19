import Schedule from "./Schedule";
import CalendarChenging from "./CalendarChenging"
import React, { FC } from "react";

const CalendarMain: FC = () => {
   return (
      <div className="calendar-main">
         <CalendarChenging/>
         <Schedule/>
      </div>
   )
}

export default CalendarMain;