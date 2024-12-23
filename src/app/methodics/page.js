"use client";

import {useSession} from "next-auth/react";
import LoginAlerts from "@/components/LoginAlerts";
import {FiCornerDownRight, FiArrowRight} from "react-icons/fi";
import { useState, useEffect, useRef } from 'react';
import MethodicsTable from "@/components/MethodicsTable";

export default function Home() {
    const { data: session } = useSession();
    const [isOpenYear, setIsOpenYear] = useState(false);
    const [isOpenSemester, setIsOpenSemester] = useState(false);
    const [isOpenModule, setIsOpenModule] = useState(false);
    const [selectedYear, setSelectedYear] = useState('Всі роки');
    const [selectedSemester, setSelectedSemester] = useState('1-2 семестр');
    const [selectedModule, setSelectedModule] = useState('Всі модулі');
    
    const years = [
        'Всі роки',
        '2024-2025',
        '2023-2024',
        '2022-2023',
        '2021-2022'
    ];

    const semesters = [
        '1-2 семестр',
        '1 семестр',
        '2 семестр'
    ];

    const modules = [
        'Всі модулі',
        'Правознавство',
        'Комп\'ютерна логіка',
        'Філософія',
        'Англійська мова',
        'Українська мова',
        'Тествоий модуль',
        'Тестовий модуль 2',
        'Тестовий модуль 3',
        'Тестовий модуль 4',
        'Тестовий модуль 5',
        'Тестовий модуль 6',
        'Тестовий модуль 7',
        'Тестовий модуль 8',
    ];

    const yearRef = useRef(null);
    const semesterRef = useRef(null);
    const moduleRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (yearRef.current && !yearRef.current.contains(event.target)) {
                setIsOpenYear(false);
            }
            if (semesterRef.current && !semesterRef.current.contains(event.target)) {
                setIsOpenSemester(false);
            }
            if (moduleRef.current && !moduleRef.current.contains(event.target)) {
                setIsOpenModule(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!session) {
        return (
            <LoginAlerts/>
        );
    }

    return (
        <div className="p-5">
            <h1 className="mb-2 font-bold text-4xl text-neutral-900">Методичні матеріали</h1>
            <div className="flex row space-x-2 ">
                <FiCornerDownRight size="24" className="text-2xl text-neutral-900"/>
                <div className="relative" ref={yearRef}>
                    <div 
                        onClick={() => setIsOpenYear(!isOpenYear)}
                        className="px-4 py-0.5 text-center font-semibold text-white bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600"
                    >
                        {selectedYear}
                    </div>
                    
                    {isOpenYear && (
                        <div className="absolute top-full left-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            {years.map((year) => (
                                <div
                                    key={year}
                                    className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setSelectedYear(year);
                                        setIsOpenYear(false);
                                    }}
                                >
                                    {year}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <FiArrowRight size="24" className="text-2xl text-neutral-900"/>
                <div className="relative" ref={semesterRef}>
                    <div 
                        onClick={() => setIsOpenSemester(!isOpenSemester)}
                        className="px-4 py-0.5 text-center font-semibold text-white bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600"
                    >
                        {selectedSemester}
                    </div>
                    
                    {isOpenSemester && (
                        <div className="absolute top-full left-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            {semesters.map((semester) => (
                                <div
                                    key={semester}
                                    className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setSelectedSemester(semester);
                                        setIsOpenSemester(false);
                                    }}
                                >
                                    {semester}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <FiArrowRight size="24" className="text-2xl text-neutral-900"/>
                <div className="relative" ref={moduleRef}>
                    <div 
                        onClick={() => setIsOpenModule(!isOpenModule)}
                        className="px-4 py-0.5 text-center font-semibold text-white bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600"
                    >
                        {selectedModule}
                    </div>
                    
                    {isOpenModule && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                            {modules.map((module) => (
                                <div
                                    key={module}
                                    className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setSelectedModule(module);
                                        setIsOpenModule(false);
                                    }}
                                >
                                    {module}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <MethodicsTable 
               selectedYear={selectedYear}
               selectedSemester={selectedSemester}
               selectedModule={selectedModule}
           />
        </div>
    );
}
