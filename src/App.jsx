import { useState } from "react";

import useLocalStorage from "./hooks/useLocalStorage";

import CalendarView from "./components/CalendarView";
import LessonModal from "./components/LessonModal";
import StatsCards from "./components/StatsCards";
import StudentSummary from "./components/StudentSummary";

function App() {
  const [lessons, setLessons] =
      useLocalStorage("lessons", []);

  const [showModal, setShowModal] =
      useState(false);

  const [selectedDate, setSelectedDate] =
      useState("");

  const openDay = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const addLesson = (lesson) => {
    setLessons([...lessons, lesson]);
  };

  const togglePaid = (id) => {
    setLessons(
        lessons.map((x) =>
            x.id === id
                ? { ...x, paid: !x.paid }
                : x
        )
    );
  };

  return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">
          Lesson Pay Calendar
        </h1>

        <StatsCards lessons={lessons} />

        <CalendarView
            lessons={lessons}
            openDay={openDay}
            togglePaid={togglePaid}
        />

        <StudentSummary lessons={lessons} />

        {showModal && (
            <LessonModal
                selectedDate={selectedDate}
                setShowModal={setShowModal}
                addLesson={addLesson}
            />
        )}
      </div>
  );
}

export default App;