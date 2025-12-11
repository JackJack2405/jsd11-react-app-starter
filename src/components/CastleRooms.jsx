import { useState } from "react";
import Castle from "./01_Castle";

export default function CastleRooms(){
     const [question, setQuestion ] = useState("");
  const [answer, setAnswer ] = useState("");

  const handleQuestion = (e) => {
setQuestion(e.target.value);
  }
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

return (
    <>
    <h1>🚩 Learn React with Castle Rooms🏰 </h1>
      <p className="text-purple-300">Message for the Secret Room🐎🎠✉️ : </p>
      <textarea
        value={question}
        onChange={handleQuestion}
        placeholder="Type your message here..."
        />
      <p className="text-yellow-300">
        {question ? `✅${question}` : "⌛Waiting for a message..." }
      </p>
      <p className="text-green-300">Reply from the Secret Room: </p>
      <p className="text-yellow-300">
        {answer ? `✅ ${answer}` : "⏳ Waiting for a reply..."}</p>
      <Castle question={question} answer = {answer} handleAnswer = {handleAnswer} /> 
    </>
);
}