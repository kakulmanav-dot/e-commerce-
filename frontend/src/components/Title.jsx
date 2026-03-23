import React from 'react'

function Title({text1 , text2}) {
  return (
    <div>
        <div className='flex justify-center items-center gap-2 mt-12 mb-1 '> 
            <p className='text-2xl text-gray-500 flex gap-1'> {text1}<span className='text-black text-2xl'>{text2}</span></p>
            <p className='sm:h-[2px] h-[1px] bg-gray-800 w-8 Ssm:w-12  '></p>
        </div>

        {/* Rendering Products */}

    </div>
  )
}

export default Title