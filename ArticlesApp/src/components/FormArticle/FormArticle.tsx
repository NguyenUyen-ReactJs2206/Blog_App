import { useForm } from 'react-hook-form'
import { ListArticle } from 'src/types/article.type'

export default function FormArticle() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<ListArticle>()

  const onSubmit = handleSubmit((data) => {
    console.log(data, 'ddddddddddddd')
  })
  return (
    <div className='my-4'>
      <form onSubmit={onSubmit}>
        <div className='mb-6'>
          <input
            type='text'
            id='large-input'
            placeholder='Article Title'
            className='sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            {...register('slug')}
          />
        </div>
        <div className='mb-6'>
          <input
            type='text'
            id='default-input'
            placeholder='What is this article about?'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            {...register('description')}
          />
        </div>
        <div className='mb-6'>
          <textarea
            id='message'
            rows={8}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            placeholder='Write your article (in markdown)'
            {...register('title')}
          />
        </div>
        <div className='mb-6'>
          <input
            type='text'
            id='default-input'
            placeholder='Enter tags'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            {...register('tagList')}
          />
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            className='rounded-md bg-green/80 px-4 py-3 text-xl text-gray-100 hover:bg-green hover:text-white'
          >
            Publiish Article
          </button>
        </div>
      </form>
    </div>
  )
}
