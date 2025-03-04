import { Link } from "react-router-dom";

const Book = ({book}) => {
  const {bookId, bookName, author, rating, tags,category, image} = book;
  return (
   <Link to={`book/${bookId}`}>
       <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="p-10 rounded-2xl">
        <img
          src={image} 
          className="h-[166px]  px-24 py-8 bg-[#F3F3F3]"
          alt={bookName} />
      </figure>
      <div className="card-actions justify-start ml-4">
          {
            tags.map((tag, idx) => <div key={idx} className="badge  bg-[#23BE0A0D] text-[#23BE0A] work-sans font-medium text-base">{tag}</div> )
          }
        </div>
      <div className="card-body">
        <h2 className="card-title playfair text-2xl font-bold">{bookName}</h2>
        <p className="work-sans text-base font-medium">By: {author}</p>
        <div className="border-t border-dashed border-gray-300"></div>
        <div className="card-actions justify-between">
          <div className="badge work-sans text-base font-medium text-gray-500">{category}</div>
          <div className="rating work-sans text-base font-medium text-gray-500 ">
            {rating}
            <input type="radio" name="rating-2" className="mask mask-star-2 ml-3" />
            
          </div>
        </div>
      </div>
    </div>
   </Link>
  );
};

export default Book;