import React from 'react';

const Logo = () => {
  return (
    <div className="pa1" style={{background: '#000000'}}>
			<img 
				alt = 'not found'
				style={{ display: 'flex', justifyContent: 'flex-end'}}
				height="75" src={require('./nfs.jpg')} />
		</div>
  )
}

export default Logo;