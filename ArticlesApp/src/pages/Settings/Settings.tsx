import FormInformation from 'src/components/FormInformation'

export default function Settings() {
  return (
    <div className='my-8 min-h-[80vh]'>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-6 col-start-4'>
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
