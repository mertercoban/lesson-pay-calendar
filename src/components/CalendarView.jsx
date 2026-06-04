export default function CalendarView({
                                         lessons,
                                         openDay,
                                         togglePaid,
                                     }) {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
            {days.map((day) => {
                const date = `2026-06-${String(day).padStart(2, "0")}`;

                const dayLessons = lessons.filter(
                    (x) => x.date === date
                );

                return (
                    <div
                        key={day}
                        className="bg-slate-800 min-h-[150px] rounded-xl p-2"
                    >
                        <div className="flex justify-between mb-2">
                            <span>{day}</span>

                            <button
                                className="bg-indigo-600 px-2 rounded"
                                onClick={() => openDay(date)}
                            >
                                +
                            </button>
                        </div>

                        {dayLessons.map((lesson) => (
                            <div
                                key={lesson.id}
                                className={`mb-2 text-sm ${
                                    lesson.paid
                                        ? "line-through text-green-400"
                                        : ""
                                }`}
                            >
                                <p>
                                    {lesson.student} - {lesson.amount} ₺
                                </p>

                                <button
                                    className="text-xs bg-green-700 px-2 py-1 rounded mt-1"
                                    onClick={() => togglePaid(lesson.id)}
                                >
                                    {lesson.paid
                                        ? "Ödendi"
                                        : "Ücret Alındı"}
                                </button>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}