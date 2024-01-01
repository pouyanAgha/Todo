import { useEffect, useState } from 'react';

import Photos from './Photos';
import Users from './Users';

const Albums = props => {
  const [albumList, setAlbum] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(album => setAlbum(album));
  }, []);
  const [userFlag, setUserFlag] = useState(true);
  const [backOrPhoto, setBackOrPhoto] = useState(true);
  const [showUserId, setUserId] = useState();
  return (
    <div>
      {userFlag ? (
        <div>
          <div className="userBox">
            {albumList.map(
              album =>
                props.userId === album.userId && (
                  <ul key={album.userId} className="userStyle">
                    <li>USER ID: {album.userId}</li>
                    <li>ID: {album.id}</li>
                    <li>TITLE: {album.title}</li>
                    <button
                      className="buttonStyle"
                      onClick={() => {
                        setUserFlag(false);
                        setBackOrPhoto(false);
                        setUserId(album.userId);
                      }}
                    >
                      photos
                    </button>
                  </ul>
                ),
            )}
          </div>
          <button className="buttonStyle m-2" onClick={() => setUserFlag(false)}>
            back
          </button>
        </div>
      ) : backOrPhoto ? (
        <Users />
      ) : (
        <Photos userId={showUserId} />
      )}
    </div>
  );
};

export default Albums;
