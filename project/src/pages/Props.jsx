import React, { useState } from "react";
import SearchBar from "./SearchBar";

const products = [
  { id: 1, name: "iPhone" },
  { id: 2, name: "MacBook" },
  { id: 3, name: "iPad" },
  { id: 4, name: "Apple Watch" },
];

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term); 
  };

  const filteredProducts = products.filter((e) =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Products</h2>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredProducts.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}














// import React, { useState, useCallback } from "react";
// import ChildComponent from "./ChildComponent";

// export default function ParentComponent() {
//   const [message, setMessage] = useState("");

//   // Callback passed to child - useCallback prevents recreation on re-renders
//   const handleChildMessage = useCallback((msgFromChild) => {
//     setMessage(msgFromChild);
//     console.log("props from child")
//   }, []);

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <p>Message from child: {message}</p>
//       <ChildComponent onSendMessage={handleChildMessage} />
//     </div>
//   );
// }


// //using callback function

// import React, { useState } from "react";
// import ChildComponent from "./ChildComponent";

// export default function ParentComponent() {
//   const [childData, setChildData] = useState("");

//   const handleDataFromChild = (data) => {
//     setChildData(data);
//   };

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <p>Data from child: {childData}</p>
//       <ChildComponent sendDataToParent={handleDataFromChild} />
//     </div>
//   );
// }
