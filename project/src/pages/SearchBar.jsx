import React from "react";

export default function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value); 
  };

  return (
    <div>
 <input
      type="text"
      placeholder="Search items..."
      onChange={handleChange}
    />
    </div>
   
  );
}
