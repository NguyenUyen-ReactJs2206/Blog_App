import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'src/store'
import { UserSetting } from 'src/types/user.type'
import { updateProfileThunk } from 'src/useslice/user.slice'
import { toast } from 'react-toastify'

const initialState: UserSetting = {
  image: '',
  username: '',
  bio: '',
  email: ''
}

export default function FormInformation() {
  const editingProfile = useSelector((state: RootState) => state.userReducer.profile)
  const { register, handleSubmit, setValue } = useForm<UserSetting>()
  const dispatch = useAppDispatch()

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
    console.log(data, 'prrrrrrrrrrrrrrr')
    dispatch(
      updateProfileThunk({
        user: data
      })
    )

    toast.success('Edit Profile success!', {
      autoClose: 1000
    })
  })
  return (
    <div className='my-4'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          id='default-input'
          className='mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          {...register('image')}
        />

        <input
          type='text'
          id='large-input'
          className='sm:text-md mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          {...register('username')}
        />

        <textarea
          id='message'
          rows={8}
          className='mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          placeholder='Write your thoughts here...'
          {...register('bio')}
        />

        <input
          type='text'
          id='large-input'
          className='sm:text-md mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          {...register('email')}
        />

        {/* <input
          type='text'
          id='large-input'
          placeholder='New Password'
          className='sm:text-md mb-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          {...register('password')}
        /> */}

        <div className='flex justify-end'>
          <button
            type='submit'
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
