import React from 'react';
import CalendarDay from './CalenderDay';
import { Event as EventType } from '../types/Event';
import '../styles/Calender.css';

interface CalendarGridProps {
  currentMonth: number;
  events: EventType[];
  setEvents: React.Dispatch<React.SetStateAction<EventType[]>>;
  resources: string[];
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentMonth, events, setEvents, resources }) => {
  const daysInMonth = new Date(2024, currentMonth + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar-grid">
      {daysArray.map(day => (
        <CalendarDay 
          key={day} 
          day={day} 
          currentMonth={currentMonth} 
          events={events} 
          setEvents={setEvents} 
          resources={resources} 
        />
      ))}
    </div>
  );
};

export default CalendarGrid;