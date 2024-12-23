export default function AttestationTable({ selectedYear }) {
    const tableData = [
        {
            year: '2024-2025',
            discipline: "Комп'ютерна логіка",
            teacher: 'Muhammed Ali',
            attestation1_1: 'н/a',
            attestation2_1: 'a',
            attestation1_2: 'a',
            attestation2_2: 'a'
        },
        {
            year: '2024-2025',
            discipline: 'Правознавство',
            teacher: 'Muhammed Bali',
            attestation1_1: 'a',
            attestation2_1: 'a',
            attestation1_2: 'a',
            attestation2_2: 'н/a'
        },
        {
            year: '2024-2025',
            discipline: 'Linux',
            teacher: 'Muhammed Cali',
            attestation1_1: 'a',
            attestation2_1: 'a',
            attestation1_2: 'н/a',
            attestation2_2: 'н/a'
        }
    ];

    const filteredData = tableData.filter(row => {
        return selectedYear === 'Всі роки' || row.year === selectedYear;
    });

    return (
        <div className="mt-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="min-w-full divide-y divide-gray-200">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Рік
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Дисципліна
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Викладач
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            1 семестр<br/>Атестація №1
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            1 семестр<br/>Атестація №2
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            2 семестр<br/>Атестація №1
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            2 семестр<br/>Атестація №2
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                {row.year}
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                {row.discipline}
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                {row.teacher}
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-center text-gray-900"
                                style={{
                                    color: row.attestation1_1 === 'a' ? 'green' : 'red'
                                }}
                            >
                                {row.attestation1_1}
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-center text-gray-900"
                                style={{
                                    color: row.attestation2_1 === 'a' ? 'green' : 'red'
                                }}
                            >
                                {row.attestation2_1}
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-center text-gray-900"
                                style={{
                                    color: row.attestation1_2 === 'a' ? 'green' : 'red'
                                }}
                            >
                                {row.attestation1_2}
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-center text-gray-900"
                                style={{
                                    color: row.attestation2_2 === 'a' ? 'green' : 'red'
                                }}
                            >
                                {row.attestation2_2}
                            </td>
                        </tr>
                    ))}
                    {filteredData.length === 0 && (
                        <tr>
                            <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                                Немає даних для відображення
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
} 