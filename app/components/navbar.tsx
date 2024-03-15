'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { pages } from '../lib/consts'
import type { PageInfo } from '../lib/types'

export default function Navbar() {
    
    // get the current page
    const [currentPage, setCurrentPage] = useState(pages.find(page => page.url === usePathname())?.name || 'home')

    const changePage = (page:PageInfo) => {
        if (currentPage === page.name) return
        setCurrentPage(page.name)
        // redirect to the new page
        window.location.href = page.url
    }

    return (
        <header>
            <nav className='grid grid-cols-3 grid-rows-2'>
                <section className='col-start-2 text-center text-3xl font-bold'>Jonathan Calvert</section>
                <section className='row-start-2 col-start-2'>
                    <ul className='flex justify-center gap-5 text-xl'>
                        {pages.map(({name, url}) => (
                            <li
                                key={name}
                                className={currentPage === name ? 'text-blue-500 bg-gray-600/35 frosted px-2 rounded-md border border-white' : 'text-gray-300 hover:text-blue-500 cursor-pointer transition duration-300 ease-in-out bg-gray-600/35 frosted px-2 rounded-md border border-white'}
                                onClick={() => changePage({name, url})}
                            >
                                {name.toUpperCase()}
                            </li>
                        ))}
                    </ul>
                </section>
            </nav>
        </header>
    )
}