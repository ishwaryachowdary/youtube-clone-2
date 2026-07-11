import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  // Fetch Popular Videos
  const fetchPopularVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      );

      const data = await response.json();

      console.log("Popular Videos:", data);

      if (data.error) {
        console.log(data.error);
        alert(data.error.message);
        return;
      }

      setVideos(data.items || []);
    } catch (error) {
      console.error("Popular Videos Error:", error);
    }
  };

  // Search Videos
  const searchVideos = async (searchText) => {
    try {
      if (!searchText.trim()) {
        fetchPopularVideos();
        return;
      }

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${encodeURIComponent(
          searchText
        )}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      );

      const data = await response.json();

      console.log("Search Response:", data);

      if (data.error) {
        console.log(data.error);
        alert(data.error.message);
        return;
      }

      setVideos(data.items || []);
    } catch (error) {
      console.error("Search Error:", error);
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        searchVideos={searchVideos}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="app">
        <Sidebar isOpen={sidebarOpen} />

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  videos={videos}
                  searchVideos={searchVideos}
                />
              }
            />

            <Route
              path="/video/:id"
              element={<VideoPlayer />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
