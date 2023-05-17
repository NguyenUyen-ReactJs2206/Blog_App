import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import path from 'src/constants/path'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
}
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    console.log(data, 'data')
  })

  return (
    <div className='min-h-[90vh] py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 '>
          <div className='col-span-12 sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4'>
            <form onSubmit={onSubmit}>
              <h1 className='text-center text-4xl'>Sign in</h1>
              <div className='my-2 text-center hover:underline'>
                <Link to={path.register} className='text-md text-green hover:text-green/70 '>
                  Need an account?
                </Link>
              </div>
              <Input
                name='email'
                type='text'
                className='mt-2'
                placeholder='Email'
                register={register}
                rules={getRules.email}
                errorMessage={errors.email?.message}
              />
              <Input
                name='password'
                type='password'
                className='mt-2'
                placeholder='Password'
                register={register}
                rules={getRules.password}
                errorMessage={errors.password?.message}
              />
              <div className='mt-0'>
                <Button
                  type='submit'
                  className='flex items-center justify-center rounded-md bg-green px-7 py-4 text-center text-sm uppercase text-white hover:bg-green/90'
                >
                  Sign in
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
