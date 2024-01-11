import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Albums = () => {
  const param = useParams();
  const [albumList, setAlbum] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${param.id}`)
      .then(response => response.json())
      .then(album => setAlbum(album));
  }, [param.id]);

  return (
    <div>
      <div className="userBox">
        {albumList.map(album => (
          <ul key={album.id} className="userStyle">
            <li>USER ID: {album.userId}</li>
            <li>ID: {album.id}</li>
            <li>TITLE: {album.title}</li>
            <Link to={`/Photos/${album.id}`} className="buttonStyle">
              photos
            </Link>
          </ul>
        ))}
      </div>
      <Link to="/" className="buttonStyle m-2">
        back
      </Link>
    </div>
  );
};

export default Albums;
