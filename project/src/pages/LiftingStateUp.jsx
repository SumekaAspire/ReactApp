import React, { useState } from "react";

//Lifting StateUp - shared data component
//move the shared state to the closest common parent of two or more components that need to access or modify that state.

function LiftingStateUp() {
  const [text, setText] = useState(""); //shared stste

  return (
    <div>
      <h2>Lifting State Up Example</h2>
      <ChildA text={text} setText={setText} />
      <ChildB text={text} />
    </div>
  );
}


//ChildA component
function ChildA({ text, setText }) {
  return (
    <div>
      <label>Enter something: </label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

//ChildB component
function ChildB({ text }) {
  return (
    <div>
      <p>You typed: {text}</p>
    </div>
  );
}

export default LiftingStateUp;
