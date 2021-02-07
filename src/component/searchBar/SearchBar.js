import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import "./searchBar.css";
import { updateFood } from "../../redux/action/food";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    console.log("search change yes");
    dispatch(updateFood(searchTerm));
  }, [searchTerm, dispatch]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    // if (event.target.value) dispatch(updateFood(event.target.value));
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      if (event.target.value) dispatch(updateFood(event.target.value));
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Food Pairing..."
        onChange={handleChange}
        onKeyPress={onKeyPress}
        value={searchTerm}
        ref={inputRef}
      />
    </div>
  );
}
export default SearchBar;
