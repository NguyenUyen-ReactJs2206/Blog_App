import { useForm } from 'react-hook-form'
import { Fragment, useEffect } from 'react'
import { BodyPostArticle } from 'src/types/article.type'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { addArticleThunk, cancelEditingPost } from 'src/useslice/articles.slice'
import { RootState, useAppDispatch } from 'src/store'
import { useSelector } from 'react-redux'

const initialState: BodyPostArticle = {
  title: '',
  description: '',
  body: '',
  tagList: []
}
export default function NewArticle() {
  const { register, handleSubmit, setValue } = useForm<BodyPostArticle>()
  const editingArticle = useSelector((state: RootState) => state.articlesReducer.editingArticle)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (editingArticle) {
      setValue('title', editingArticle?.title || initialState.title)
      setValue('description', editingArticle?.description || initialState.description)
      setValue('body', editingArticle?.body || initialState.body)
      setValue('tagList', editingArticle?.tagList || initialState.tagList)
    }
  }, [editingArticle, setValue])

  const postArticle = (body: any) => {
    const promise = dispatch(addArticleThunk(body))
    toast.success('Post articles success!', {
      autoClose: 1000
    })
    navigate('/')

    return () => {
      promise.abort()
    }
  }
  const onSubmit = handleSubmit((data) => {
    postArticle({ article: data })
  })

  const handleCancelEditingPost = (nameId: string) => {
    dispatch(cancelEditingPost)
    navigate(`/article/${nameId}`)
  }
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
                    {!editingArticle && (
                      <button
                        className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'
                        type='submit'
                      >
                        <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                          Publish Article
                        </span>
                      </button>
                    )}
                    {editingArticle && (
                      <Fragment>
                        <button
                          type='submit'
                          className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800'
                        >
                          <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                            Update Post
                          </span>
                        </button>
                        <button
                          type='reset'
                          className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'
                          onClick={() => handleCancelEditingPost(editingArticle.slug)}
                        >
                          <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                            Cancel
                          </span>
                        </button>
                      </Fragment>
                    )}
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
