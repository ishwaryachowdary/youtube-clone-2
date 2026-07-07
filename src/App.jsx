import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  const fetchPopularVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      );

      const data = await response.json();
      setVideos(data.items || []);
    } catch (error) {
      console.error(error);
    }
  };

  const searchVideos = async (searchText) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchText}&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      );

      const data = await response.json();
      setVideos(data.items || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BrowserRouter>
      <Navbar searchVideos={searchVideos} />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home videos={videos} />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;