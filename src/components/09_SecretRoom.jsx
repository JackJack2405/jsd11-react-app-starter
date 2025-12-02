//import SecretRoom from "./09_SecretRoom";

export default function SecretRoom({question, answer,handleAnswer }){
    return(
        <div className="flex flex-col justify-center items-center pt-10 bg-pink-500 w-[90%]">
            <h1>SecretRoom</h1>
            <p className="text-purple-500">Message from the outside: </p>
            <p className="text-yellow-300">
                {question ? `✅${question}` : "⌛Waiting for a message..." }
            </p>
            <p>Reply to the outside: </p>
            <textarea 
            value = {answer}
            onChange={handleAnswer}
            className="w-[150px] bg-white text-black rounded px-2 py-1" 
            />
            <p className="text-yellow-300">{answer ? `✅${answer}`: "⌛Waiting for a reply" }</p>
            
        
            {/* <p>🗝️ This is the final room.</p> */}
        </div>
    );
}

