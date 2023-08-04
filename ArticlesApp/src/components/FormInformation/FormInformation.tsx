import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { User, UserSetting } from 'src/types/user.type'

const initialState: UserSetting = {
  image: '',
  username: '',
  bio: '',
  email: ''
}
export default function FormInformation() {
  const editingProfile = useSelector((state: RootState) => state.userReducer.profile)
  const { register, handleSubmit, setValue } = useForm<User>()

  //Setting => put /user
  //
  // "profile": {
  //   "email": "nhoc@gmail.com",
  //   "username": "nhocccdggsd",
  //   "bio": "Hi. I'm Nhocccc",
  //   "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
  //   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibmhvY0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im5ob2NjY2RnZ3NkIn0sImlhdCI6MTY5MDQ0ODU2OSwiZXhwIjoxNjk1NjMyNTY5fQ.N-NX1sZtirmKpj3HfeeINeOJdZKlfgUKPQfy6Txwia4"
  // }

  useEffect(() => {
    // Thiết lập giá trị ban đầu cho các ô input từ Redux state
    if (editingProfile) {
      setValue('image', editingProfile?.user.image || initialState.image)
      setValue('username', editingProfile?.user.username || initialState.username)
      setValue('bio', editingProfile?.user.bio || initialState.bio)
      setValue('email', editingProfile?.user.email || initialState.email)
    }
  }, [editingProfile, setValue])

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div className='my-4'>
      <form onSubmit={onSubmit}>
        <div className='mb-6'>
          <input
            type='text'
            id='default-input'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            {...register('image')}
          />
        </div>
        <div className='mb-6'>
          <input
            type='text'
            id='large-input'
            className='sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            {...register('username')}
          />
        </div>
        <div className='mb-6'>
          <textarea
            id='message'
            rows={8}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            placeholder='Write your thoughts here...'
            {...register('bio')}
          />
        </div>
        <div className='mb-6'>
          <input
            type='text'
            id='large-input'
            className='sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            {...register('email')}
          />
        </div>
        <div className='mb-6'>
          <input
            type='text'
            id='large-input'
            placeholder='New Password'
            className='sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            {...register('password')}
          />
        </div>
        <div className='flex justify-end'>
          <button
            type='button'
            className='rounded-md bg-green/80 px-4 py-3 text-xl text-gray-100 hover:bg-green hover:text-white'
          >
            Update Settings
          </button>
        </div>
      </form>
      <div className='mt-6 flex justify-start border-t border-t-gray-300 py-4'>
        <button
          type='button'
          className='rounded-md border border-red-700/80 px-4 py-2 text-red-700/80 hover:bg-red-700/70 hover:text-white'
        >
          Or click here to logout.
        </button>
      </div>
    </div>
  )
}
