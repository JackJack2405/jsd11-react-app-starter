import { useState } from "react";
import Castle from "./components/01_Castle";

// state variable vs standard JS variable (var,let,const)
// In React we can use useState (a react Hook or built-in function/method) to create a state variable

export default function App() {
  const [question, setQuestion ] = useState("");
  const [answer, setAnswer ] = useState("");


  const handleQuestion = (e) => {
setQuestion(e.target.value);
  }
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  }

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <h1> Learn React with Castle Rooms🏰 </h1>
      <p className="text-purple-300">Message for the Secret Room🐎🎠✉️ : </p>
      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black px-2 py-1"/>
      <p className="text-yellow-300">
        {question ? `✅${question}` : "⌛Waiting for a message..." }
      </p>
      <p className="text-green-300">Reply from the Secret Room: </p>
      <p className="text-yellow-300">{answer ? answer: "⌛Waiting for a reply..."}</p>
      <Castle question={question} answer = {answer} handleAnswer = {handleAnswer} /> 
    </div>
  );
}
