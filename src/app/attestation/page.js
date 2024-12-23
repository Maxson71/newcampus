"use client";

import {useSession} from "next-auth/react";
import LoginAlerts from "@/components/LoginAlerts";
import {FiCornerDownRight} from "react-icons/fi";
import { useState, useEffect, useRef } from 'react';
import AttestationTable from "@/components/AttestationTable";

export default function Home() {
    const { data: session } = useSession();
    const [isOpenYear, setIsOpenYear] = useState(false);
    const [selectedYear, setSelectedYear] = useState('Всі роки');
    
    const years = [
        'Всі роки',
        '2024-2025',
        '2023-2024',
        '2022-2023',
        '2021-2022'
    ];

    const yearRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (yearRef.current && !yearRef.current.contains(event.target)) {
                setIsOpenYear(false);
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
            <h1 className="mb-2 font-bold text-4xl text-neutral-900">Атестація</h1>
            <div className="flex row space-x-2">
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
            </div>
            <AttestationTable selectedYear={selectedYear} />
        </div>
    );
}
