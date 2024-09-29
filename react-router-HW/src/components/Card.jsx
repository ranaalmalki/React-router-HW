import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div className=' flex justify-center gap-7  lg:flex-row md:flex-col md:items-center'>
       
        <div className='Card shadow-md shadow-white w-64 h-48 flex justify-center items-center bg-white'>
            <div className='card-body flex items-center bg-white'>
               <h2 className='card-title'> <Link to="/desert">{props.title}</Link></h2>

            </div>

        </div>
        <div className='Card shadow-md shadow-white w-64 h-48 flex justify-center items-center bg-white'>
            <div className='card-body flex items-center bg-white'>
               <h2 className='card-title'><Link to="/forest">{props.title2}</Link></h2>

            </div>

        </div>
        <div className='Card shadow-md shadow-white w-64 h-48 flex justify-center items-center bg-white'>
            <div className='card-body flex items-center bg-white'>
               <h2 className='card-title'><Link to="/mountains">{props.title3}</Link></h2>

            </div>

        </div>
        <div className='Card shadow-md shadow-white w-64 h-48 flex justify-center items-center bg-white'>
            <div className='card-body flex items-center bg-white'>
               <h2 className='card-title'><Link to="/sea">{props.title4}</Link></h2>

            </div>

        </div>
        <div className='Card shadow-md shadow-white w-64 h-48 flex justify-center items-center bg-white'>
            <div className='card-body flex items-center bg-white'>
               <h2 className='card-title'><Link to="/valley">{props.title5}</Link></h2>

            </div>

        </div>

    </div>
  )
}

export default Card