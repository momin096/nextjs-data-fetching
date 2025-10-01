
import Link from 'next/link'


export default function NavBar() {
    return (
        <div>
            <nav className='mt-5'>
                <ul className='flex justify-center items-center gap-10'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/posts'}>Posts</Link>
                    </li>
                    <li>
                        <Link href={'/meals'}>Meals</Link>
                    </li>
                    <li>
                        <Link href={'/register'}>Register</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}
