import React from "react";
import '../styles/Event.css'
import { Event as EventType } from "../types/Event";

interface EventProps {
  event: EventType;
  events: EventType[];
  setEvents: React.Dispatch<React.SetStateAction<EventType[]>>;
}

const Event: React.FC<EventProps> = ({ event, events, setEvents }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(e => e.id !== event.id));
    }
  };

  return (
    <div className="event" style={{ backgroundColor: event.color }}>
      {event.title}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Event;