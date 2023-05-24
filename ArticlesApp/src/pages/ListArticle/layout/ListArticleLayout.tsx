import { useContext, useEffect, useState } from 'react'
import { Tags, getTags } from 'src/apis/tags.api'
import Banner from 'src/components/Banner'
import { AppContext } from 'src/contexts/app.context'
import GlobalFeed from '../pages/GlobalFeed'

export default function ListArticleLayout() {
  const { isAuthenticated } = useContext(AppContext)
  const [tags, setTags] = useState<Tags>()

  useEffect(() => {
    getTags().then((res) => {
      const tagsResult = res.data
      setTags(tagsResult)
    })
  }, [])

  return (
    <div>
      {!isAuthenticated && <Banner />}
      <div className='my-6'>
        <div className='container'>
          <div className='relative grid grid-cols-1 text-left md:mx-6 md:grid-cols-12'>
            <div className='md:col-span-9'>
              <div className=''>
                <div className='flex'>
                  {!isAuthenticated ? '' : <button className='border-b-1 px-4 py-2 text-gray-400 '>Your Feed</button>}
                  <button className='border-b-2 border-b-green px-4 py-2 text-green'>Global Feed</button>
                </div>
              </div>
              <GlobalFeed />
            </div>
            <div className='md:col-span-3'>
              <div className='mx-4 rounded-md bg-gray-100 p-4'>
                <p>Popular Tags</p>
                <div className='flex flex-wrap'>
                  {tags?.tags.map((el, index) => (
                    <div
                      key={index}
                      className='mt-1 cursor-pointer rounded-xl border bg-gray-400 px-2 text-[12px] text-white hover:bg-gray-600'
                    >
                      {el}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
