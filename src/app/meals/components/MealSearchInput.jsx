"use client"
import { usePathname, useRouter } from 'next/navigation';

import { useEffect, useState } from 'react'

export default function MealSearchInput() {
    // const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url)
    }, [search])

    return (
        <div>
            <input className='bg-gray-200 text-lg text-black p-2 px-5 rounded-2xl' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}
