import React, { FC } from "react";
import { Sidebar, Calendar, CalendarWrapper } from "../components";


const CalendarLayout: FC = () => {
   return (
      <CalendarWrapper>
         <Sidebar/>
         <Calendar/>
      </CalendarWrapper>
   );
};

export default CalendarLayout;