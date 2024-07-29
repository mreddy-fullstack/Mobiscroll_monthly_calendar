import React from 'react';
import { Event as EventType } from '../types/Event';
import Event from './Event';
import '../styles/Calender.css';

interface CalendarDayProps {
  day: number;
  currentMonth: number;
  events: EventType[];
  setEvents: React.Dispatch<React.SetStateAction<EventType[]>>;
  resources: string[];
}

const CalendarDay: React.FC<CalendarDayProps> = ({ day, currentMonth, events, setEvents, resources }) => {
  const today = new Date();
  const isToday = today.getDate() === day && today.getMonth() === currentMonth;
  const dayEvents = events.filter(event => event.date === day);

  return (
    <div className={`calendar-day ${isToday ? 'today' : ''}`}>
      <span>{day}</span>
      {dayEvents.map(event => (
        <Event key={event.id} event={event} events={events} setEvents={setEvents} />
      ))}
    </div>
  );
};

export default CalendarDay;