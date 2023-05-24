import { useContext, useState } from 'react'
import Banner from 'src/components/Banner'
import { AppContext } from 'src/contexts/app.context'
import GlobalFeed from '../components/GlobalFeed'
import TagList from '../components/TagList'
import YourFeed from '../components/YourFeed'

export default function ListArticleLayout() {
  const { isAuthenticated } = useContext(AppContext)
  const [isYourFeed, setIsYourFeed] = useState(false)

  const handleYourFeed = () => {
    setIsYourFeed(true)
  }

  const handleGlobalFeed = () => {
    setIsYourFeed(false)
  }

  return (
    <div>
      {!isAuthenticated && <Banner />}
      <div className='my-6 min-h-[90vh]'>
        <div className='container'>
          <div className='relative grid grid-cols-1 text-left md:mx-6 md:grid-cols-12'>
            <div className='md:col-span-9'>
              {!isAuthenticated ? (
                <div className=''>
                  <div className='flex'>
                    <button className='border-b-2 border-b-green px-4 py-2 text-green'>Global Feed</button>
                  </div>
                  <GlobalFeed />
                </div>
              ) : (
                <div className=''>
                  <div className='flex'>
                    <button
                      className='border-b-gray border-b-1 cursor-not-allowed px-4 py-2 text-gray-300'
                      onClick={handleYourFeed}
                      disabled
                    >
                      Your Feed
                    </button>
                    <button className='border-b-2 border-b-green px-4 py-2 text-green' onClick={handleGlobalFeed}>
                      Global Feed
                    </button>
                  </div>
                  {!isYourFeed && <GlobalFeed />}
                  {isYourFeed && <YourFeed />}
                </div>
              )}
            </div>
            <div className='md:col-span-3'>
              <TagList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
