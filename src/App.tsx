import React, { useState } from 'react';
import { Event as EventType } from './types/Event';
import './App.css';
import CalendarGrid from './components/CalenderGrid';

const App: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [events, setEvents] = useState<EventType[]>([
    // { id: 1, title: 'Event 1', date: 1, color: 'red' },
    // { id: 2, title: 'Event 2', date: 2, color: 'blue' },
  ]);
  const resources = ['Resource 1', 'Resource 2'];

  const handlePrevMonth = () => {
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
  };

  return (
    <div className="app">
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>Previous</button>
          <h1>{new Date(2024, currentMonth).toLocaleString('default', { month: 'long' })}</h1>
          <button onClick={handleNextMonth}>Next</button>
        </div>
        <CalendarGrid
          currentMonth={currentMonth}
          events={events}
          setEvents={setEvents}
          resources={resources}
        />
      </div>
    </div>
  );
};

export default App;