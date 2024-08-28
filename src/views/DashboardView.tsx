import { Link } from 'react-router-dom'

export default function DashboardView() {
    return (
        <>
            <h1 className='text-5xl font-bold'>Projects</h1>
            <p className=' text-2xl font-light text-gray-500 mt-5'>Manage yours projects</p>

            <nav>
                <Link className='' to={'/projects/create'}></Link>
            </nav>
        </>
    )
}
