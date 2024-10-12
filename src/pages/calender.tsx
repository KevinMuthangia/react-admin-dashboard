import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate, DateSelectArg, EventClickArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Header from "../components/header";


interface CalendarEvent {
    id: string;
    title: string;
    start: string;
    end?: string;
    allDay: boolean;
}

const Calendar = () => {
	document.title = "KevMuthangia | Calender"

	const [currentEvents, setCurrentEvents] = useState<CalendarEvent []>( 
		JSON.parse(localStorage.getItem("currentEvents") || "[]") || []
	);

	function addEvents (events: CalendarEvent[]) {
		setCurrentEvents(prev => [...prev, ...events].filter((event, index, self) => self.findIndex((e) => e.id === event.id) === index));
		
	}

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
	  setCurrentEvents(prev => prev.filter((event) => event.id !== selected.event.id))
    }
  };

  useEffect(() => {
    localStorage.setItem("currentEvents", JSON.stringify(currentEvents));
  }, [currentEvents]);

  return (
    <div className="pb-12">
		<Header title="Calendar" subtitle="Full Calendar Interactive Page" />

		<div className="flex justify-between mt-4">
			{/* CALENDAR SIDEBAR */}
			{
				currentEvents.length > 0 &&
				(<div className="flex-1 bg-tertiary dark:bg-tertiaryDark p-4 rounded">
					<h3 className="text-xl">Events</h3>
					<ul className="mt-2">
						{currentEvents.length && currentEvents.map((event) => (
						<li
							key={event?.id}
							className="bg-secondary p-2 rounded my-4 text-black"
						>
							<p className="font-medium text-sm">{event?.title}</p>
							<p className="text-sm">
								{
									formatDate(event?.start, {
										year: "numeric",
										month: "short",
										day: "numeric",
									})
								}
							</p>
						</li>
						))}
					</ul>
				</div>)
			}

			{/* CALENDAR */}
			<div className="flex-[5] ml-4">
				<FullCalendar
					height="75vh"
					plugins={[
					dayGridPlugin,
					timeGridPlugin,
					interactionPlugin,
					listPlugin,
					]}
					headerToolbar={{
					left: "prev,next today",
					center: "title",
					right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
					}}
					initialView="dayGridMonth"
					editable={true}
					selectable={true}
					selectMirror={true}
					dayMaxEvents={true}
					select={handleDateClick}
					eventClick={handleEventClick}
					// fix type error
					eventsSet={(events: any) => addEvents(events)}
				/>
			</div>
		</div>
    </div>
  );
};

export default Calendar;
