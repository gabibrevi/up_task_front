import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ProjectForm from '@/components/project/ProjectForm'
import { ProjectFormData } from 'types'

export default function CreateProjectView() {
    const initialValues: ProjectFormData = {
        projectName: '',
        clientName: '',
        description: '',
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: initialValues })

    const handleForm = (data: ProjectFormData) => {
        console.log(data)
    }

    return (
        <>
            <div className=' max-w-3xl mx-auto'>
                <h1 className='text-5xl font-bold'>Initiate a New Project</h1>
                <p className=' text-2xl font-light text-gray-500 mt-5'>
                    Complete the form below to create a new project
                </p>

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
                        value='Create'
                        className='w-full p-3 bg-fuchsia-500 hover:bg-fuchsia-600 transition-colors uppercase font-bold text-white cursor-pointer'></input>
                </form>
            </div>
        </>
    )
}
