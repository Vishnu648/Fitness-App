import Banner from '../assets/Banner.png'

const Hero = () => {
  return (
    <div className='h-[614px] flex justify-between'>
      <img src={Banner} alt="banner" className='h-[674px] w-[35%] relative top-[-60px] left-[-2rem]'/>
      <div className='flex-1 flex flex-col justify-center items-center'>
      <h1 className='text-blue-300 font-bold text-5xl px-8 flex flex-col items-center leading-[55px]'>
        <span>YOUR BODY</span> <span className='text-red-600'>CAN DO IT<span className='text-blue-300'>.</span></span>
        <span>IT'S TIME TO</span>  CONVINCE YOUR <span className='text-red-600'>MIND</span>
      </h1>
      </div>
    </div>
  )
}

export default Hero
