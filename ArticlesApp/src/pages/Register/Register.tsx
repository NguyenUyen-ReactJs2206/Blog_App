import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import path from 'src/constants/path'
import { getRules } from 'src/utils/rules'
import { User } from 'src/types/user.type'
import { registerAccount } from 'src/apis/auth.api'
import { ErrorUnprocessableEntityMessage } from 'src/types/utils.type'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { toast } from 'react-toastify'
import { AppContext } from 'src/contexts/app.context'

export default function Register() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<User>()

  const userRegisterAccount = (body: any) => {
    const controller = new AbortController()
    registerAccount(body, controller.signal)
      .then((response) => {
        toast.success('Successful account registration!', {
          autoClose: 1000
        })

        setIsAuthenticated(true)
        navigate('/')
        window.location.reload()
      })
      //Khi loi 422 thi show error
      .catch((error) => {
        if (isAxiosUnprocessableEntityError<ErrorUnprocessableEntityMessage>(error)) {
          const formError = error.response?.data.errors

          if (formError?.email) {
            setError('email', {
              message: `Account ${formError.email[0]}`,
              type: 'Server'
            })
          }
          if (formError?.username) {
            setError('username', {
              message: `Account ${formError.username[0]}`,
              type: 'Server'
            })
          }
        }
      })
    return () => {
      controller.abort()
    }
  }
  const onSubmit = handleSubmit((data) => {
    userRegisterAccount({ user: data })
  })
  return (
    <div className='min-h-[90vh] py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 '>
          <div className='col-span-12 sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4'>
            <form onSubmit={onSubmit}>
              <h1 className='text-center text-4xl'>Sign up</h1>
              <div className='my-2 text-center hover:underline'>
                <Link to={path.login} className='text-md text-green hover:text-green/70 '>
                  Have an account?
                </Link>
              </div>
              <Input
                name='username'
                type='text'
                register={register}
                className='mt-2'
                placeholder='Username'
                rules={getRules.username}
                errorMessage={errors.username?.message}
              />
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
                  className=' flex items-center justify-center rounded-md bg-green px-7 py-4 text-center text-sm uppercase text-white hover:bg-green/90'
                >
                  Sign up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
