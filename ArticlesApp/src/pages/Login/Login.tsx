import { Link } from 'react-router-dom'
import Button from 'src/components/Button'
import Input from 'src/components/Input'

import path from 'src/constants/path'
export default function Login() {
  return (
    <div className='py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 '>
          <div className='col-span-12 sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4'>
            <h1 className='text-center text-4xl'>Sign in</h1>
            <div className='my-2 text-center hover:underline'>
              <Link to={path.register} className='text-md text-green hover:text-green/70 '>
                Need an account?
              </Link>
            </div>
            <form>
              <Input name='email' type='email' className='mt-5' placeholder='Email' />
              <Input name='password' type='password' className='mt-2' placeholder='Password' />
              <div className='mt-2'>
                <Button
                  type='submit'
                  className=' flex items-center justify-center rounded-md bg-green px-7 py-4 text-center text-sm uppercase text-white hover:bg-green/90'
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
