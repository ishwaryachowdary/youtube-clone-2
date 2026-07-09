import { useContext } from "react";
import { HistoryContext } from "../context/HistoryContext";

function History() {
  const { history } = useContext(HistoryContext);

  return (
    <div>
      <h2>Watch History</h2>

      {history.length === 0 ? (
        <p>No videos watched yet.</p>
      ) : (
        history.map((video) => (
          <div key={video.id}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              width="250"
            />
            <h3>{video.snippet.title}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default History;