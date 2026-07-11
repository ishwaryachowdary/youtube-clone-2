import {
  FaHome,
  FaFire,
  FaPlayCircle,
  FaHistory,
  FaThumbsUp,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "active" : ""}`}>
      <div className="menu-item">
        <FaHome />
        <span>Home</span>
      </div>

      <div className="menu-item">
        <FaFire />
        <span>Trending</span>
      </div>

      <div className="menu-item">
        <FaPlayCircle />
        <span>Subscriptions</span>
      </div>

      <div className="menu-item">
        <FaHistory />
        <span>History</span>
      </div>

      <div className="menu-item">
        <FaThumbsUp />
        <span>Liked Videos</span>
      </div>
    </div>
  );
}

export default Sidebar;
