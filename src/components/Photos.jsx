import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Photos = () => {
  const [showPhotos, setPhotos] = useState([]);
  const param = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${param.id}`)
      .then(response => response.json())
      .then(photos => setPhotos(photos));
  }, [param.id]);
  return (
    <div>
      <div className="photoStyle">
        {showPhotos.map(photo => (
          <img src={photo.thumbnailUrl} alt="Error" key={photo.id} />
        ))}
      </div>
      <Link to="/" className="buttonStyle m-2">
        back
      </Link>
    </div>
  );
};
export default Photos;
