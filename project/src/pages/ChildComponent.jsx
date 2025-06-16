// import React from "react";

// export default function ChildComponent({ onSendMessage }) {
//   return (
//     <div>
//       <h2>Child Component</h2>
//       <button onClick={() => onSendMessage("Hello from Child!")}>
//         Send Message to Parent
//       </button>
//     </div>
//   );
// }



import React from "react";

export default function ChildComponent({ sendDataToParent }) {
  const handleClick = () => {
    sendDataToParent("Hello from Child!");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}
