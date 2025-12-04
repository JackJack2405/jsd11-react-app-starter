import { useState } from "react";

// This standard JavaScript variable is declared INSIDE the component.
// Watch how it gets reset on every render!
let regularVariableCount = 0;

const UnderstandingState = () => {
  const [stateCount, setStateCount] = useState(0);

  const handleStateIncrement = () => {
    setStateCount((prevCount) => prevCount + 1);
  };

  const handleRegularIncrement = () => {
    regularVariableCount = regularVariableCount + 1;
    console.log(
      `Regular variable value is now: ${regularVariableCount}. Notice the UI does not update.`
    );
  };

  console.log("--- Component is re-rendering ---");
  console.log(`State count: ${stateCount}`);
  console.log(`Regular variable count: ${regularVariableCount}`);

  return (
    <div className="p-6 border-2 border-dashed border-teal-500 rounded-lg bg-gray-900 text-center">
      <h1 className="text-2xl font-bold mb-4">
        useState vs. Standard Variable
      </h1>
      <p className="mb-6 text-gray-400">
        Open the console to see what's happening behind the scenes.
      </p>

      {/* State Counter */}
      <div className="p-4 bg-gray-700 rounded-lg mb-4">
        <h2 className="text-lg font-semibold">1. Counter with useState</h2>
        <p className="text-5xl font-mono my-3">{stateCount}</p>
        <button
          onClick={handleStateIncrement}
          className="px-4 py-2 bg-blue-500 rounded"
        >
          Increment State
        </button>
        <p className="mt-2 text-sm text-blue-300">
          This works as expected. The UI updates on every click.
        </p>
      </div>

      {/* Standard Variable Counter */}
      <div className="p-4 bg-gray-700 rounded-lg">
        <h2 className="text-lg font-semibold">
          2. Counter with Standard Variable
        </h2>
        <p className="text-5xl font-mono my-3">{regularVariableCount}</p>
        <button
          onClick={handleRegularIncrement}
          className="px-4 py-2 bg-purple-500 rounded"
        >
          Increment Variable
        </button>
        <p className="mt-2 text-sm text-purple-300">
          This does NOT update the UI. When you increment the state counter,
          this one will reset to 0.
        </p>
      </div>
    </div>
  );
};

export default UnderstandingState;
