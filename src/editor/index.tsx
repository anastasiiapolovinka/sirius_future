import React, { FC } from "react";
import { Sidebar, CalendarWrapper, CalendarHeader, Banner, UpcomingLesson, BalanceLessons, FutureLessons, Report, HomeWork } from "../components";


const UserLayout: FC = () => {
   return (
      <CalendarWrapper>
         <Sidebar/>
         <div>
            <CalendarHeader/>
            <div className="calendar-main">
               <div className="banner-section">
                  <Banner/>
                  <UpcomingLesson/>
                  <div className="report-work">
                     <HomeWork/>
                     <Report/>
                  </div>
               </div>
               <div className="lessons-section">
                  <BalanceLessons/>
                  <FutureLessons/>
               </div>
            </div>
         </div>
      </CalendarWrapper>
   )
}

export default UserLayout;