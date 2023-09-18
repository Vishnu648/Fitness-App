import Banner from '../assets/Banner.png'

const Hero = () => {
  return (
    <div className='h-[614px] flex justify-between'>
      <img src={Banner} alt="banner" className='h-[674px] w-120 relative top-[-60px] left-[-2rem]'/>
      <div className='border border-white flex-1 flex flex-col justify-center items-center'>
      <h1 className='text-blue-300 font-bold text-2xl'>
        YOUR BODY CAN DO IT. <br/>
        IT'S TIME TO CONVINCE YOUR MIND
      </h1>
      </div>
    </div>
  )
}

export default Hero
