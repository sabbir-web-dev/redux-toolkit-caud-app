import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BookSlice";
import { Link } from "react-router-dom";

function BooksView() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Book</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books && 
            books.map((books,index) => {
              const {id,book,author} = books;
              return (
                <tr key={id}>
                  <td>{index +1}.</td>
                  <td>{book}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit" state={{id,book,author}}>
                      <button className="btn-ediit">
                        <TbEdit />
                      </button>
                    </Link>
                    <button
                      className="btn-ediit"
                      onClick={() => dispatch(deleteBook(id))}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default BooksView;
