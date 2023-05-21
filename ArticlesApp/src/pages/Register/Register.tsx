import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import path from 'src/constants/path'
import { getRules } from 'src/utils/rules'
import { User } from 'src/types/user.type'
import { registerAccount } from 'src/apis/auth.api'
import { useDispatch } from 'react-redux'
import { ErrorMessage, SuccessResponseApi } from 'src/types/utils.type'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { toast } from 'react-toastify'

export default function Register() {
  // const [profile, setProfile] = useState<FormData>(registerUser)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<SuccessResponseApi<User>>()

  const userRegisterAccount = (body: any) => {
    const controller = new AbortController()

    registerAccount(body, controller.signal)
      .then((res) => {
        const registerAccountResult = res.data
        console.log(registerAccountResult, 'reeeeeeeeeeeeeeee')
      })
      //Khi loi 422 thi show error
      .catch((error) => {
        if (isAxiosUnprocessableEntityError<ErrorMessage>(error)) {
          const formError = error.response?.data.errors.email[0]
          console.log(formError, 'ffffffffffffffffff')
          toast.error(`Account ${formError}. Please register another account!`, {
            autoClose: 1000
          })
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
                rules={getRules.user.username}
                errorMessage={errors.user?.username?.message}
              />
              <Input
                name='email'
                type='text'
                className='mt-2'
                placeholder='Email'
                register={register}
                rules={getRules.user.email}
                errorMessage={errors.user?.email?.message}
              />
              <Input
                name='password'
                type='password'
                className='mt-2'
                placeholder='Password'
                register={register}
                rules={getRules.user.password}
                errorMessage={errors.user?.password?.message}
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
