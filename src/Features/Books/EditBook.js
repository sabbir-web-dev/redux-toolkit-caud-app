import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { editBook } from './BookSlice';

function EditBook() {
  const location = useLocation();
  const [book,setBook] = useState(location.state.book);
  const [author,setAuthor] = useState(location.state.author);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const hendleSubmit = (e) => {
    e.preventDefault()
    dispatch(editBook({id:location.state.id, book, author}));
    navigate("/books", {replace: true})
  }
  return (
    <form className="form" >
    <div className="input-wrap">
      <label htmlFor="name">Book Name: </label>
      <input
        type="text"
        className="input"
        id="name"
        value={book}
        onChange={(e) => setBook(e.target.value)}
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
      <button className="btn"
      onClick={hendleSubmit}
      >Update Book</button>
    </div>
  </form>
  )
}

export default EditBook
