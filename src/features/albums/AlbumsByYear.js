import { Link } from "react-router-dom";

const AlbumsByYear = ({ albumsData }) => {
  const album = [...albumsData].sort((a, b) => (b.year > a.year ? 1 : -1));
  return (
    <div>
      <h1>Albums Sorted By Year</h1>

      {album.map((album) => {
        return (
          <div key={album.year}>
            <h2>year: {album.year}</h2>
            <p>title: {album.title}</p>
            <Link to={`/albums/${album.id}`}>{album.title} </Link>
            <p>artist: {album.artist}</p>

            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default AlbumsByYear;
