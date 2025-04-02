import React, { useState } from "react";

const names = [
  "Amit Sharma",
  "Priya Verma",
  "Rahul Mehta",
  "Neha Agarwal",
  "Vikram Singh",
  "Ananya Reddy",
  "Rajat Kapoor",
  "Kiran Patil",
  "Sneha Nair",
  "Arjun Choudhary"
];

const Searchbox = () => {
  const [query, setQuery] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filtered = names.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredNames(filtered);
    } else {
      setFilteredNames([]);
    }
  };

  const handleSelect = (name) => {
    setQuery(name);
    setFilteredNames([]);
  };

  return (
    <div style={{ width: "300px", margin: "20px auto", position: "relative" }}>
      Search Box<input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search names..."
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "5px"
        }}
      />
      {filteredNames.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            width: "100%",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "5px",
            zIndex: 1
          }}
        >
          {filteredNames.map((name, index) => (
            <li
              key={index}
              onClick={() => handleSelect(name)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #eee"
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbox;
