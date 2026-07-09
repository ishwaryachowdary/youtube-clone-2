import "./Home.css";
import VideoCard from "../components/VideoCard";

function Home({ videos, searchVideos }) {
  return (
    <>
      <div className="category-bar">
        <button onClick={() => searchVideos("Cricket highlights")}>
          🏏 Cricket
        </button>

        <button onClick={() => searchVideos("Technology")}>
          💻 Tech
        </button>

        <button onClick={() => searchVideos("Telugu full movie")}>
          🎬 Telugu Movies
        </button>

        <button onClick={() => searchVideos("Telugu songs")}>
          🎵 Telugu Songs
        </button>

        <button onClick={() => searchVideos("Gaming")}>
          🎮 Gaming
        </button>
      </div>

      <div className="home">
        {videos.map((video) => (
          <VideoCard key={video.id.videoId || video.id} video={video} />
        ))}
      </div>
    </>
  );
}

export default Home;