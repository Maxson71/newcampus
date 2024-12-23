"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">
              Вітаємо Вас у системі «Електронний Кампус» КПІ ім. Ігоря Сікорського!
            </h1>

            {!session ? (
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600">
                  Щоб продовжити, будь ласка, зареєструйтеся або увійдіть
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-lg font-semibold text-gray-900">
                    Шановні відвідувачі системи Електронний кампус!
                  </p>
                  <p className="text-gray-600">
                    Автоматизована система «Електронний Кампус» - це унікальне віртуальне середовище, 
                    в якому взаємодіють всі учасники освітнього процесу КПІ ім. Ігоря Сікорського. 
                    Тут можна знайти методичне забезпечення до навчальних дисциплін, результати поточного контролю та іншу важливу інформацію.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-blue-700 mb-4">
                    Корисні посилання:
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-center text-blue-500 hover:text-blue-700">
                      <FiExternalLink className="mr-2" />
                      <Link href="https://schedule.kpi.ua" target="_blank">
                        розклад занять: schedule.kpi.ua
                      </Link>
                    </li>
                    <li className="flex items-center text-blue-500 hover:text-blue-700">
                      <FiExternalLink className="mr-2" />
                      <Link href="https://t.me/dnvr_31" target="_blank">
                        питання щодо навчання: бот Департаменту навчально-виховної роботи (Телеграм)
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-600">
                    Бажаємо Вам натхнення, наснаги у навчанні й відкриття нових горизонтів успіху!
                  </p>
                  <p className="text-gray-600 mt-4">
                    З повагою,<br />
                    Команда КПІ ім. Ігоря Сікорського
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
