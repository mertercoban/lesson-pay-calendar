import { useState } from "react";

export default function LessonModal({
                                        selectedDate,
                                        setShowModal,
                                        addLesson,
                                    }) {
    const [student, setStudent] = useState("");
    const [amount, setAmount] = useState("");

    const save = () => {
        if (!student || !amount) return;

        addLesson({
            id: Date.now(),
            student,
            amount,
            date: selectedDate,
            paid: false,
        });

        setShowModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
            <div className="bg-slate-800 p-6 rounded-xl w-96">
                <h2 className="text-xl mb-4">Yeni Ders</h2>

                <input
                    className="w-full p-2 mb-3 rounded text-black"
                    placeholder="Öğrenci"
                    value={student}
                    onChange={(e) => setStudent(e.target.value)}
                />

                <input
                    className="w-full p-2 mb-3 rounded text-black"
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