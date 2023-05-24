import FormArticle from 'src/components/FormArticle'

export default function NewArticle() {
  return (
    <div className='my-8 min-h-[80vh]'>
      <div className='container'>
        <div className='grid grid-cols-12 '>
          <div className='col-span-12 md:col-span-10 md:col-start-2'>
            <div className='px-4'>
              <FormArticle />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
