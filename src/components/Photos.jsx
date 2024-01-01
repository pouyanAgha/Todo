import { useEffect, useState } from 'react';

import Albums from './Albums';

const Photos = props => {
  const [showPhotos, setPhotos] = useState([]);
  const [backAlbum, setbackAlbum] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(photos => setPhotos(photos));
  }, []);
  return (
    <div>
      {backAlbum ? (
        <div>
          <div className="photoStyle">
            {showPhotos.map(
              photo =>
                photo.albumId === props.userId && (
                  <img src={photo.thumbnailUrl} alt="Error" key={photo.id} />
                ),
            )}
          </div>
          <button className="buttonStyle m-2" onClick={() => setbackAlbum(false)}>
            back
          </button>
        </div>
      ) : (
        <Albums userId={props.userId} />
      )}
    </div>
  );
};
export default Photos;
