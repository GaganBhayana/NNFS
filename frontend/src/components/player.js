import React from 'react';
import { Player } from 'video-react';

const VideoPlayer = () => {
  return (
    <div className="pa4 w160 h90">
      <Player 
        fluid = {false}
        width= '1000'
        >
        <source src={require('./video.mp4')} />
      </Player>
    </div>
  );
}

export default VideoPlayer;