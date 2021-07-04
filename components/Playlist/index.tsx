import React from 'react';

import styles from './Playlist.module.scss';

type songType = {
  id: string;
  title: string;
  uid: string;
}

type userType = {
  uid: string;
  lindoName: string;
  lindoIndex: number;
}

type propTypes = {
  songs: songType[];
  users: userType[];
}

const Playlist: React.FC<propTypes> = ({songs, users}) => {

  function getLindo(uid: string){
    const currentUser = users.find(user => user.uid === uid);
    if(currentUser){
      return currentUser;
    } return {
      lindoName: 'Saiu',
      lindoIndex: 0
    }
  }

  return <div className={styles.playlist}>
    {songs.map(song => (
      <div key={song.id} className={styles.song}>
        {getLindo(song.uid).lindoName}
      </div>
    ))}
  </div>; 
}

export default Playlist;