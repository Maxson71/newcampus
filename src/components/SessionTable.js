export default function SessionTable({ selectedYear, selectedSemester }) {
    const tableData = [
        {
            year: '2024-2025',
            semester: '1 семестр',
            date: '14.09.2024',
            name: 'Правознавство',
            teacher: 'Muhammed Ali',
            controlType: 'Залік',
            recordType: 'Основна',
            grade: '90'
        },
        {
            year: '2024-2025',
            semester: '1 семестр',
            date: '22.10.2024',
            name: 'Програмування',
            teacher: 'Majshed Alibaba',
            controlType: 'Екзамен',
            recordType: 'Основна',
            grade: '75'
        },
        {
            year: '2024-2025',
            semester: '1 семестр',
            date: '30.11.2024',
            name: 'Бази даних',
            teacher: 'Tuchin Dmytro',
            controlType: 'Залік',
            recordType: 'Додаткова',
            grade: '60'
        }
    ];

    const filteredData = tableData.filter(row => {
        const yearMatch = selectedYear === 'Всі роки' || row.year === selectedYear;
        const semesterMatch = 
            selectedSemester === '1-2 семестр' || 
            row.semester === selectedSemester;
         return yearMatch && semesterMatch;
    });

    return (
        <div className="mt-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Рік
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Семестр
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Дата
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Назва
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Викладач
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Вид контролю
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Тип відомості
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Оцінка
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
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    {row.semester}
                                </span>
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                {row.date}
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                {row.name}
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                {row.teacher}
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                {row.controlType}
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                {row.recordType}
                            </td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 font-bold"
                                style={{
                                    color: row.grade >= 85 ? 'green' : row.grade >= 75 ? 'orange' : row.grade >= 60 ? 'red' : 'black'
                                }}
                            >
                                {row.grade}
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