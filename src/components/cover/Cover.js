import React from 'react'
import './Cover.css';
import portada from '../../media/portada.mp4';

const Cover = () => {
  return <div className="cover-container">
      <video className="video" src={portada} autoPlay loop muted/>
      <h1>Emmanuel Paul Carrillo Carpio</h1>
      <p>Full Stack Web Developer</p>
  </div>
}

export default Cover;