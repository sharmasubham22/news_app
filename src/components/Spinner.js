import React from 'react';
import spin from './spin.gif'

const Spinner = ()=> {
  
    return (
      <div className='text-center'>
        <img src={spin} className="my-3" alt="load" width="70px"/>
      </div>
    )
}

export default Spinner
