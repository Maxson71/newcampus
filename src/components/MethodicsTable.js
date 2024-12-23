"use client";

import { useRouter } from 'next/navigation';

export default function MethodicsTable({ selectedYear, selectedSemester, selectedModule }) {
    const tableData = require('../data.json');
    const router = useRouter();

    // Фільтрація даних
    const filteredData = tableData.filter(row => {
    const yearMatch = selectedYear === 'Всі роки' || row.year === selectedYear;
    const semesterMatch = 
        selectedSemester === '1-2 семестр' || 
        row.semester === selectedSemester;
    const moduleMatch = 
        selectedModule === 'Всі модулі' || 
        row.name === selectedModule;
        return yearMatch && semesterMatch && moduleMatch;
    });

    const handleRowClick = (moduleId) => {
        router.push(`/methodics/${moduleId}`);
    };

    return (
       <div className="mt-6">
           <table className="min-w-full divide-y divide-gray-200">
               <thead>
                    <tr>
                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Рік
                       </th>
                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Семестр
                       </th>
                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Назва
                       </th>
                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Викладач
                       </th>
                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Читає
                       </th>
                   </tr>  
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                   {filteredData.map((row, index) => (
                            <tr 
                                key={index} 
                                className="hover:bg-gray-50 cursor-pointer" 
                                onClick={() => handleRowClick(row.id)}
                            >            
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                    {row.year}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {row.semester}
                                    </span>
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                    {row.name}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                    {row.teacher}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                    {row.speaker}
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
