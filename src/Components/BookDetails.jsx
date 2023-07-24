import React, {useState, useEffect} from 'react';
import "../App";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BOOKS_URL } from "../API";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`${BOOKS_URL}/${id}`);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookDetails();
  }, [id]);

  return (
    <div className="book-details">
      <div>
        <h2>{book.title}</h2>
        <img src={book.image_url} alt="#" />
      </div>
      <div className="book-des">
        <h2>Description</h2>
        <p>{book.description}</p>
        <h2>Authors</h2>
        <p>{book.authors}</p>
      </div>
    </div>
  );
};

export default BookDetails;
