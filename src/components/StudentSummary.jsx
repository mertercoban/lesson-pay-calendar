export default function StudentSummary({ lessons }) {
    const students = {};

    lessons.forEach((lesson) => {
        if (!students[lesson.student]) {
            students[lesson.student] = {
                total: 0,
                paid: 0,
            };
        }

        students[lesson.student].total += Number(
            lesson.amount
        );

        if (lesson.paid) {
            students[lesson.student].paid += Number(
                lesson.amount
            );
        }
    });

    return (
        <div className="mt-8">
            <h2 className="text-2xl mb-4">
                Öğrenci Özetleri
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(students).map(
                    ([name, data]) => (
                        <div
                            key={name}
                            className="bg-slate-800 p-4 rounded-xl"
                        >
                            <h3 className="font-bold mb-2">
                                {name}
                            </h3>

                            <p>Toplam: {data.total} ₺</p>

                            <p>Ödenen: {data.paid} ₺</p>

                            <p>
                                Kalan: {data.total - data.paid} ₺
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}