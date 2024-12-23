"use client";

import { useSession } from "next-auth/react";
import LoginAlerts from "@/components/LoginAlerts";
import { FiDownload } from "react-icons/fi";
import { use } from 'react';

export default function ModulePage({ params }) {
    const { data: session } = useSession();
    const moduleId = use(params).id;
    
    // Приклад даних методичних матеріалів
    const methodics = [
        {
            id: '1',
            name: "Правознавство",
            materials: [
                {
                    id: 1,
                    title: "Методичка 1",
                    description: "Опис методички 1",
                    downloadUrl: "/files/metoda1.pdf"
                },
                {
                    id: 2,
                    title: "Методичка 2",
                    description: "Опис методички 2",
                    downloadUrl: "/files/metoda2.pdf"
                },

            ]
        },
        {
            id: '2',
            name: "Комп'ютерна логіка",
            materials: [
                {
                    id: 1,
                    title: "Методичка з комп'ютерної логіки",
                    description: "Опис методички",
                    downloadUrl: "/files/metoda2.pdf"
                },
            ]
        },
    ];

    if (!session) {
        return <LoginAlerts />;
    }

    const moduleData = methodics.find(m => m.id === moduleId);

    if (!moduleData) {
        return <div className="p-5">Модуль не знайдено</div>;
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
                    {moduleData.name}
                </div>
            </div>

            <div className="mt-6">
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                        {moduleData.materials.map((material) => (
                            <li key={material.id}>
                                <div className="px-4 py-4 sm:px-6 flex items-center justify-between hover:bg-gray-50">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-blue-600">
                                            {material.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600">
                                            {material.description}
                                        </p>
                                    </div>
                                    <div className="ml-4">
                                        <a
                                            href={material.downloadUrl}
                                            download
                                            className="inline-flex items-center p-2 text-blue-600 hover:text-blue-800"
                                        >
                                            <FiDownload size={24} />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
} 