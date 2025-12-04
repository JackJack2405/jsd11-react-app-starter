export default function YouTubePlayer() {
  return (
    <div className="p-6 border-2 border-dashed border-teal-500 rounded-lg bg-gray-900 text-center">
      <h2 className="text-xl mb-4">YouTube Video Player</h2>
      <iframe
        src="https://www.youtube.com/embed/QAXe1nfo8Jk"
        width="315"
        height="560"
        title="YouTube Video Player"
        allowFullScreen
      ></iframe>
    </div>
  );
}