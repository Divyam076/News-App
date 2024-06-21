import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
        <div className="text-center my-5">
      <div> 
        <img src={loading} alt="loading" />
        </div>
        </div>
    )
  }
}
