import React, { useRef } from 'react'

import useIntersectionRatio from '../hooks/useIntersectionRatio'


function ProductView({ bgImage, hedding, linkText, linkHref, subText, primaryButtonText, secondoryButtonText }) {
  const sectionRef = useRef();
  const ratio = useIntersectionRatio(sectionRef,
    {
      threshold: Array.from({ length: (1 - 0) / 0.05 + 1 }, (_, i) => 0 + i * 0.05),//same as range(0,1,0.05) of python
    }
  );

  


  return (
    <section className="h-screen flex justify-center items-center  bg-center bg-cover bg-no-repeat lg:bg-cover  snap-start"
      style={{ backgroundImage: `url('${bgImage}')` }}
      ref={sectionRef}
    >
      <article className='h-3/4  w-full  flex flex-col justify-between items-center '
        style={{opacity:ratio<0.9?Math.max(ratio-0.4,0):ratio}}
      >
        <div className='flex flex-col justify-center items-center space-y-4' >
          <h1 className='text-5xl font-semibold '>{hedding}</h1>
          <div className=' flex space-x-2'>
            <span className='text-xl'>{subText}</span>
            {
              (linkText && linkHref) ?
                <a href={linkHref} className='text-xl  text-center underline decoration-1 hover:decoration-2  '>{linkText}</a>
                :
                ""
            }
          </div>

        </div>

        <div className=' flex flex-col  w-3/4 md:flex-row  justify-center items-center max-md:space-y-6 md:space-x-10 '>
          <button className='w-full  lg:px-20 py-2 rounded-full bg-gray-900/60 text-white font-semibold backdrop-blur-sm  ring-2 ring-transparent   active:ring-current '>{primaryButtonText}</button>
          <button className='w-full  lg:px-20 py-2 rounded-full bg-white/70 font-semibold ring-2 ring-transparent   active:ring-current'>{secondoryButtonText}</button>
        </div>

      </article>
    </section>
  )
}

export default ProductView