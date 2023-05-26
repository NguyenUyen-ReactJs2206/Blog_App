import { useEffect, useState } from 'react'
import { Tags, getTags } from 'src/apis/tags.api'

export default function TagList() {
  const [tags, setTags] = useState<Tags>()

  useEffect(() => {
    getTags().then((res) => {
      const tagsResult = res.data
      setTags(tagsResult)
    })
  }, [])
  return (
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
  )
}
