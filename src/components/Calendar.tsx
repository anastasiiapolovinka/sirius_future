import React, { FC, ReactNode } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarMain from "./CalendarMain";

const Calendar: FC = () => {
   return (
      <div className="calendar">
         <CalendarHeader/>
         <CalendarMain/>
      </div>
   )
};

export default Calendar;