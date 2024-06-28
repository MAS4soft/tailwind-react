import cons01 from '../assets/cons01.jpg'
import cons02 from '../assets/cons02.jpg'
import cons03 from '../assets/cons03.jpg'
import cons04 from '../assets/cons04.jpg'
import cons05 from '../assets/cons05.jpg'
import cons06 from '../assets/cons06.jpg'

const Services = () => {
    return (
        <div className='border-b-2 border-b-gray-800 py-4'>
            <h1 className='text-2xl font-bold text-black-500'>Build Your Dream</h1>
            <h2 className=' py-2 text-4xl font-bold mb-8'>Quality Services</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className=' rounded-sm shadow-md  flex p-2 flex-col'>
                    <img className='w-full h-full' src={cons01} alt='cons01' />
                    <h1 className='font-bold text-2xl '>Land Minning</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum.</p>
                </div>
                <div className=' rounded-sm shadow-md  flex p-2 flex-col'>
                    <img className='w-full h-full' src={cons02} alt='cons02' />
                    <h1 className='font-bold text-2xl '>Building Staffs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum.</p>
                </div>
                <div className=' rounded-sm shadow-md  flex p-2 flex-col'>
                    <img className='w-full h-full' src={cons03} alt='cons03' />
                    <h1 className='font-bold text-2xl '>Material Supply </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum.</p>
                </div>
                <div className=' rounded-sm shadow-md  flex p-2 flex-col'>
                    <img className='w-full h-full' src={cons04} alt='cons04' />
                    <h1 className='font-bold text-2xl '>Conslutancy</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum.</p>
                </div>
                <div className=' rounded-sm shadow-md  flex p-2 flex-col'>
                    <img className='w-full h-full' src={cons05} alt='cons05' />
                    <h1 className='font-bold text-2xl '>Crane Service</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum.</p>
                </div>
                <div className=' rounded-sm shadow-md  flex p-2 flex-col'>
                    <img className='w-full h-full' src={cons06} alt='cons06' />
                    <h1 className='font-bold text-2xl '>Architecture</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum.</p>
                </div>
            </div>
        </div>
    )
}

export default Services
