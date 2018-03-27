import React from 'react';
import classNames from 'classnames';

const DeviceToggle = props => {
  function handleMap(){
    props.handler('map')
  }
  function handleSpotty(){
    props.handler('spotty')
  }
  
  return(
    <div className="device-toggle buttons row">
      <button 
        className={classNames('map-toggle', { active: props.device == 'map' })}
        onClick={handleMap}>
        Map
      </button>
      
      <button 
        className={classNames('spotty-toggle', { active: props.device == 'spotty' })}
        onClick={handleSpotty}>
        Spotty
      </button>
    </div>
  )
}

export default DeviceToggle;