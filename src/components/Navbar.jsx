import { useState } from "react";
import { FaBars, FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ searchVideos }) {

  const [searchText, setSearchText] = useState("");
  const [showProfile, setShowProfile] = useState(false);

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
          onChange={(e)=>setSearchText(e.target.value)}
        />

        <button onClick={handleSearch}>
          <FaSearch />
        </button>

      </div>


      <div className="nav-right">

        <FaBell />

        <div className="profile">

          <FaUserCircle
            className="profile-icon"
            onClick={()=>setShowProfile(!showProfile)}
          />


          {showProfile && (
            <div className="profile-menu">

              <h3>Ishwarya</h3>
              <p>Frontend Developer</p>

              <hr />

              <div>My Channel</div>
              <div>Settings</div>
              <div>Logout</div>

            </div>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;