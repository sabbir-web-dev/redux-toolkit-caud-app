import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./BookSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


function AddBook() {
  const [book, setName] = useState("");
  const [author, setAuthor] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const hendleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({id: uuidv4(),book,author}));
    navigate("/books", {replace : true})
  };

  return (
    <form className="form" onSubmit={hendleSubmit}>
      <div className="input-wrap">
        <label htmlFor="name">Book Name: </label>
        <input
          type="text"
          className="input"
          id="name"
          value={book}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="input-wrap">
        <label htmlFor="author">Author: </label>
        <input
          type="text"
          className="input"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div className="input-wra">
        <button className="btn">Add Book</button>
      </div>
    </form>
  );
}

export default AddBook;
