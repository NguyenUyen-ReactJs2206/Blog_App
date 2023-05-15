import { Link } from 'react-router-dom'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import path from 'src/constants/path'

export default function Register() {
  return (
    <div className='py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 '>
          <div className='col-span-12 sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4'>
            <h1 className='text-center text-4xl'>Sign up</h1>
            <div className='my-2 text-center hover:underline'>
              <Link to={path.login} className='text-md text-green hover:text-green/70 '>
                Have an account?
              </Link>
            </div>
            <form>
              <Input name='username' type='text' className='mt-5' placeholder='Username' />
              <Input name='email' type='email' className='mt-2' placeholder='Email' />
              <Input name='password' type='password' className='mt-2' placeholder='Password' />
              <div className='mt-2'>
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
