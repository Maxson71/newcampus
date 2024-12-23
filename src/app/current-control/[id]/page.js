"use client";

import { useSession } from "next-auth/react";
import LoginAlerts from "@/components/LoginAlerts";
import { use } from 'react';
import { FiMoreVertical } from "react-icons/fi";

export default function ControlPage({ params }) {
    const { data: session } = useSession();
    const moduleId = use(params).id;

    const controlData = {
        id: 1,
        name: "Комп'ютерна логіка",
        grades: [
            {
                id: 1,
                date: "01.01.2024",
                grade: 5,
                type: "Практичне заняття",
                teacher: "Muhammed Ali",
                notes: "Тест"
            },
            {
                id: 2,
                date: "01.01.2024",
                grade: 5,
                type: "Практичне заняття",
                teacher: "Muhammed Ali",
                notes: "Тест"
            },
            {
                id: 3,
                date: "01.01.2024",
                grade: 2,
                type: "Практичне заняття",
                teacher: "Muhammed Ali",
                notes: "Тест"
            },
            {
                id: 4,
                date: "01.01.2024",
                grade: 0,
                type: "Практичне заняття",
                teacher: "Muhammed Ali",
                notes: "Тест"
            }
        ]
    };

    if (!session) {
        return <LoginAlerts />;
    }

    return (
        <div className="p-5">
            <h1 className="mb-2 font-bold text-4xl text-neutral-900">
                            Методичні матеріали
            </h1>
            <div className="flex row space-x-2 ">
                <div 
                    className="px-4 py-0.5 text-center font-semibold text-white bg-blue-500 rounded-full"
                >
                    {controlData.name}
                </div>
            </div>
            <div className="mt-6">
                <table className="min-w-full divide-y">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Дата
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Оцінка
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Вид контролю
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Викладач
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Примітки
                            </th>
                            <th className="relative px-6 py-3">
                                <span className="sr-only">Дії</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {controlData.grades.map((grade) => (
                            <tr key={grade.id} className="hover:bg-gray-50">
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                    {grade.date}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900 font-bold"
                                    style={{
                                        color: grade.grade >= 5 ? 'green' : grade.grade >= 2 ? 'orange' : grade.grade == 0 ? 'red' : 'black'
                                    }}
                                >
                                    {grade.grade}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                    {grade.type}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                    {grade.teacher}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                    {grade.notes}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
} 