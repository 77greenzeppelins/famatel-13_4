import React, { useState } from 'react';

const RoadPrompt = () => {
  const [promptState, setPromptState] = useState(false);
  return (
    <div>
      <button
        onClick={() => setPromptState(true)}
        className="w-10 h-10 fc bg-corpo"
      >
        W
      </button>
      {promptState ? (
        <div
          className={`fixed fc bottom-0 left-0 right-0 top-0 z-[551] bg-grey wrapper-1`}
        >
          666
        </div>
      ) : null}
    </div>
  );
};

export default RoadPrompt;
