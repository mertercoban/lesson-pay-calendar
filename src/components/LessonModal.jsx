import { useState } from "react";

export default function LessonModal({
                                        selectedDate,
                                        setShowModal,
                                        addLesson,
                                        lessons,
                                        setLessons,
                                        editingLesson,
                                        setEditingLesson,
                                    }) {
    const [student, setStudent] = useState(
        editingLesson?.student || ""
    );

    const [amount, setAmount] = useState(
        editingLesson?.amount || ""
    );

    const save = () => {
        if (!student || !amount) return;

        if (editingLesson) {
            setLessons(
                lessons.map((item) =>
                    item.id === editingLesson.id
                        ? {
                            ...item,
                            student,
                            amount,
                        }
                        : item
                )
            );

            setEditingLesson(null);
        } else {
            addLesson({
                id: Date.now(),
                student,
                amount,
                date: selectedDate,
                paid: false,
            });
        }

        setShowModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

            <div className="bg-slate-800 p-6 rounded-xl w-96">
                <h2 className="text-xl mb-4">Yeni Ders</h2>
                <h2 className="text-xl mb-4">
                    {editingLesson
                        ? "Dersi Düzenle"
                        : "Yeni Ders"}
                </h2>
                <input
                    className="
                    w-full
                    p-2
                    mb-3
                    rounded
                    bg-slate-700
                    text-white
                    border
                    border-slate-600
                    outline-none
                    "
                    placeholder="Öğrenci"
                    value={student}
                    onChange={(e) => setStudent(e.target.value)}
                />

                <input
                    className="
                    w-full
                    p-2
                    mb-3
                    rounded
                    bg-slate-700
                    text-white
                    border
                    border-slate-600
                    outline-none
                    "
                    type="number"
                    placeholder="Ücret"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <div className="flex gap-2">
                    <button
                        className="bg-indigo-600 px-4 py-2 rounded"
                        onClick={save}
                    >
                        Kaydet
                    </button>

                    <button
                        className="bg-gray-600 px-4 py-2 rounded"
                        onClick={() => setShowModal(false)}
                    >
                        İptal
                    </button>
                </div>
            </div>
        </div>
    );
}