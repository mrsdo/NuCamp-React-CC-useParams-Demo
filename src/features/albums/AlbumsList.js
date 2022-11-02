import { Link } from "react-router-dom";

const AlbumsList = ({ albumsData }) => {
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albumsData.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumsList;
