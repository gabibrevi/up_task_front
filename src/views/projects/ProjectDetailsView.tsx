import { getProjectById } from '@/api/ProjectAPI'
import { useQuery } from '@tanstack/react-query'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export default function ProjectDetailsView() {
    const navigate = useNavigate()
    const params = useParams()
    const projectId = params.projectId!
    const { data, isLoading, isError } = useQuery({
        queryKey: ['projectDetails', projectId],
        queryFn: () => getProjectById(projectId),
        retry: false,
    })

    if (isLoading) return <p>Loading...</p>
    if (isError) return <Navigate to={'/404'} />
    if (data) {
        return (
            <>
                <h1 className=' text-5xl font-black '>{data.projectName}</h1>
                <p className=' text-2xl font-light text-gray-500 mt-5  '>{data.description}</p>
                <button
                    type='button'
                    className=' bg-purple-400 hover:bg-purple-500 text-white px-10 py-3 text-xl font-bold cursor-pointer transition-colors '
                    onClick={() => navigate('?newTask=true')}>
                    Add task
                </button>
            </>
        )
    }
}
