import React, { Component } from 'react';
import spin from './spin.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spin} alt="load" width="70px"/>
      </div>
    )
  }
}

export default Spinner
