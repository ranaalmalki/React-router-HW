import React from 'react'

function Card(props) {
  return (
    <div className='flex justify-center gap-7'>
        <div className='Card shadow-md shadow-white w-64 h-48 flex justify-center items-center'>
            <div className='card-body flex items-center'>
               <h2 className='card-title'>{props.title}</h2>

            </div>

        </div>
        <div className='Card shadow-md shadow-white w-64 h-48 flex justify-center items-center'>
            <div className='card-body flex items-center'>
               <h2 className='card-title'>{props.title2}</h2>

            </div>

        </div>
        <div className='Card shadow-md shadow-white w-64 h-48 flex justify-center items-center'>
            <div className='card-body flex items-center'>
               <h2 className='card-title'>{props.title3}</h2>

            </div>

        </div>
        <div className='Card shadow-md shadow-white w-64 h-48 flex justify-center items-center'>
            <div className='card-body flex items-center'>
               <h2 className='card-title'>{props.title4}</h2>

            </div>

        </div>
        <div className='Card shadow-md shadow-white w-64 h-48 flex justify-center items-center'>
            <div className='card-body flex items-center'>
               <h2 className='card-title'>{props.title5}</h2>

            </div>

        </div>

    </div>
  )
}

export default Card