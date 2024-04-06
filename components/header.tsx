import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex justify-between items-center p-4 bg-blue-500'>
        <h1 className='text-white text-2xl'>
            <Link href='/'>
                Home
            </Link>
        </h1>
        <nav>
            <ul className='flex space-x-4'>
                <li>
                    <Link href='/blogs' className='ml-2 text-white hover:text-gray-200 hover:underline'>
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link href='/api/auth/sign-in' className='ml-2 hover:text-gray-200 hover:underline'>
                        Sign In
                    </Link>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Header