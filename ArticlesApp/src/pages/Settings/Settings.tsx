import FormInformation from 'src/components/FormInformation'

export default function Settings() {
  return (
    <div className='my-8 min-h-[80vh]'>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4'>
            <div className='px-4'>
              <h1 className='text-center text-4xl font-light text-gray-600'>Your Settings</h1>
              <FormInformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
