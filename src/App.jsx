import { useState } from "react";
//import Castle from "./components/01_Castle";
import CastleRooms from "./components/CastleRooms";
import ViewToggleButton  from "./components/ViewToggleButton";
import YouTubePlayer from "./components/YouTubePlayer";
import UnderstandingState from "./components/UnderstandingState";

// state variable vs standard JS variable (var,let,const)
// In React we can use useState (a react Hook or built-in function/method) to create a state variable

export default function App() {
  const [view, setView] = useState("");

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <div className="flex gap-x-4 mb-8">
        <ViewToggleButton
        onClick={() => {
          setView("castle");
          }}
        >
            Castle Rooms
        </ViewToggleButton>

        <ViewToggleButton
        onClick={() => {
          setView("video");
          }}
        >
            YouTube Video
        </ViewToggleButton>

        <ViewToggleButton
        onClick={() => {
          setView("state");
          }}
        >
            State Demo
        </ViewToggleButton>
      </div>

      {view === "castle" && <CastleRooms />}
      {view === "video" && <YouTubePlayer />}
      {view === "state" && <UnderstandingState />}
    </div>
  );
}
