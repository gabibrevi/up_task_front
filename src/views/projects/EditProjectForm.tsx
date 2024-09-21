import { updateProject } from '@/api/ProjectAPI'
import ProjectForm from '@/components/project/ProjectForm'
import { Project, ProjectFormData } from '@/types/index'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

type EditProjectFormProps = {
    data: ProjectFormData
    projectId: Project['_id']
}
export default function EditProjectForm({ data, projectId }: EditProjectFormProps) {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            projectName: data.projectName,
            clientName: data.clientName,
            description: data.description,
        },
    })

    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: updateProject,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
            queryClient.invalidateQueries({ queryKey: ['editProject', projectId] })
            toast.success(data)
            navigate('/')
        },
    })

    const handleForm = (formData: ProjectFormData) => {
        const data = {
            formData,
            projectId,
        }
        mutate(data)
    }

    return (
        <>
            <div className=' max-w-3xl mx-auto'>
                <h1 className='text-5xl font-bold'>Edit Project</h1>
                <p className=' text-2xl font-light text-gray-500 mt-5'>Complete the form below to edit the project</p>

                <nav className=' my-5'>
                    <Link
                        className=' bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors '
                        to={'/'}>
                        Back to projects
                    </Link>
                </nav>

                <form
                    className=' mt-10 p-10 bg-white rounded-lg shadow-lg '
                    onSubmit={handleSubmit(handleForm)}
                    noValidate>
                    <ProjectForm register={register} errors={errors} />

                    <input
                        type='submit'
                        value='Edit'
                        className='w-full p-3 bg-fuchsia-500 hover:bg-fuchsia-600 transition-colors uppercase font-bold text-white cursor-pointer'></input>
                </form>
            </div>
        </>
    )
}
