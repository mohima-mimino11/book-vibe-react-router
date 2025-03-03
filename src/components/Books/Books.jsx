import { useEffect, useState } from "react";


const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetch('./booksData.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  },[])
  return (
    <div className="mt-24">
      <h2 className="text-4xl font-bold playfair text-center">Books: {books.length}</h2>
    </div>
  );
};

export default Books;