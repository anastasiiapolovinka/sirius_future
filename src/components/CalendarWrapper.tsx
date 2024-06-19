import React, { FC, ReactNode } from "react";

interface CalendarWrapperProps {
   children: ReactNode;
};

const CalendarWrapper: FC<CalendarWrapperProps> = ({children}) => {
   return (
      <div className="wrapper">
         {children}
      </div>
   )
};

export default CalendarWrapper;