// Shows the YouTube video if the exercise has one; otherwise a "search on YouTube" button.
export default function VideoBox({ exercise }) {
  const searchUrl =
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(exercise.name + " proper form tutorial");

  if (exercise.videoId) {
    return (
      <div>
        <div className="video-wrap">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${exercise.videoId}?start=${exercise.videoStart || 0}&rel=0`}
            title={`${exercise.name} tutorial`}
            loading="lazy"
            allowFullScreen
            allow="accelerometer; encrypted-media; picture-in-picture; fullscreen"
          />
        </div>
        <p className="video-note">
          Want more angles? <a href={searchUrl} target="_blank" rel="noopener noreferrer">Search more tutorials on YouTube</a>
        </p>
      </div>
    );
  }

  return (
    <div className="video-wrap video-placeholder">
      <div>
        <div className="play-icon">▶</div>
        <p>Watch <strong>{exercise.name}</strong> tutorials on YouTube</p>
        <a className="btn btn-primary" href={searchUrl} target="_blank" rel="noopener noreferrer">Search Tutorials</a>
      </div>
    </div>
  );
}
