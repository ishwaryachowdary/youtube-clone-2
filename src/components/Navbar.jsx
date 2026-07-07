import { useState } from "react";
import { FaBars, FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ searchVideos }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      searchVideos(searchText);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <FaBars />
        <h2>YouTube Clone</h2>
      </div>

      <div className="nav-middle">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      <div className="nav-right">
        <FaBell />
        <FaUserCircle />
      </div>
    </nav>
  );
}

export default Navbar;