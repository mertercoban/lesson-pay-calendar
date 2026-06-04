export default function StatsCards({ lessons }) {
    const total = lessons.reduce((a, b) => a + Number(b.amount), 0);

    const paid = lessons
        .filter((x) => x.paid)
        .reduce((a, b) => a + Number(b.amount), 0);

    const remaining = total - paid;

    return (
        <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-800 p-5 rounded-xl">
                <h3>Toplam</h3>
                <p className="text-2xl font-bold">{total} ₺</p>
            </div>

            <div className="bg-green-800 p-5 rounded-xl">
                <h3>Tahsil Edilen</h3>
                <p className="text-2xl font-bold">{paid} ₺</p>
            </div>

            <div className="bg-red-800 p-5 rounded-xl">
                <h3>Kalan</h3>
                <p className="text-2xl font-bold">{remaining} ₺</p>
            </div>
        </div>
    );
}