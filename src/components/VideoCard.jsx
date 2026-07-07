import { Link } from "react-router-dom";
import "./VideoCard.css";

function VideoCard({ video }) {
  const videoId = video.id.videoId || video.id;

  return (
    <Link
      to={`/video/${videoId}`}
      className="video-card"
      style={{ textDecoration: "none", color: "black" }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />

      <h3>{video.snippet.title}</h3>

      <p>{video.snippet.channelTitle}</p>
    </Link>
  );
}

export default VideoCard;