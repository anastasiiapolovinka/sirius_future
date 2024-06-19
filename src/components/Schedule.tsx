import Calendar from 'react-calendar';
import { useSelector } from 'react-redux';
import { ArrowRight, ArrowLeft } from './calendar_components';
import Button from './Button';
import React, { FC } from 'react';
import { SubjectListStore } from '../store/types';

interface TileContentProps {
   date: Date;
};

const TileContent: FC<TileContentProps> = ({ date }) => {
   const lessonList = useSelector((state: SubjectListStore) => state.subjectList.value);
   const activeDate = date.setDate(date.getDate());
   const today = date.setDate(new Date().getDate());
   const isPrevDay = today > activeDate;
   const isToday = activeDate === today;
   const activeLessons = lessonList.filter((lesson) => lesson.date === activeDate);

   return (
      <div className={`tile-item ${isToday && 'today-item'} ${isPrevDay && 'prev-item'}`}>
         {Boolean(activeLessons.length) && activeLessons.map((activeLesson) => {
            const { name, paid, canceled } = activeLesson;
            return (
               <div className={`tile-lesson ${paid && 'paid-lesson'} ${canceled && 'canceled-lesson'}`}>
                  <span className="lesson-duration">13:00-13:45</span>
                  <div className="lesson-title">{name}</div>
               </div>
            );
         })}

      </div>
   );
};

const Schedule: FC = () => {
   return (
      <div className="calendar-wrapper">
         <div className="calendar-buttons-set">
            <Button>Сегодня</Button>
            <div className="question-info">?</div>
         </div>
         <Calendar className="calendar" nextLabel={<ArrowRight />} prevLabel={<ArrowLeft />} tileContent={(props) => <TileContent {...props}/>} tileClassName="custom-tile" />
      </div>
   );
}

export default Schedule;