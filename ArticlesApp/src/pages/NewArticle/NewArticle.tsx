import { useForm } from 'react-hook-form'
import { addArticle } from 'src/apis/article.api'
import { ListArticle } from 'src/types/article.type'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

type PostArticle = Pick<ListArticle, 'title' | 'description' | 'body' | 'tagList'>
export default function NewArticle() {
  const { register, handleSubmit } = useForm<PostArticle>()
  const navigate = useNavigate()

  const postArticle = (body: any) => {
    const controller = new AbortController()

    addArticle(body, controller.signal).then((res) => {
      // const articlePosted = res.data.article
      toast.success('Post articles success!', {
        autoClose: 1000
      })
      navigate('/')
    })
    return () => {
      controller.abort()
    }
  }
  const onSubmit = handleSubmit((data) => {
    postArticle({ article: data })
  })

  return (
    <div className='my-8 min-h-[80vh]'>
      <div className='container'>
        <div className='grid grid-cols-12 '>
          <div className='col-span-12 md:col-span-10 md:col-start-2'>
            <div className='px-4'>
              <div className='my-4'>
                <form onSubmit={onSubmit}>
                  <div className='mb-6'>
                    <input
                      type='text'
                      id='large-input'
                      placeholder='Article Title'
                      className='sm:text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                      {...register('title')}
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
                      {...register('body')}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
