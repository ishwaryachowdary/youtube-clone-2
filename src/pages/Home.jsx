import "./Home.css";
import VideoCard from "../components/VideoCard";

function Home({ videos }) {
  return (
    <div className="home">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default Home;