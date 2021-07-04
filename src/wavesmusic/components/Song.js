import React from 'react';

const Song = ({ ecomm,currentSong , isPlaying }) => {
  return (
    <div className="song-container">
      {!ecomm && <img className={isPlaying ? "song-playing" : ""} src={currentSong.cover} alt={currentSong.name} />}
      <h2>{currentSong.name}</h2>
     {!ecomm && <h3>{currentSong.artist}</h3>}
    </div>
  );
};

export default Song;
