import { useLoaderData, useParams } from "react-router-dom";


const BookDetail = () => {

  const books = useLoaderData();

  
  const {bookId} = useParams();
  const id = parseInt(bookId)
  console.log(bookId);
  const book = books.find(book => book.bookId === id)
  console.log(book);
  const {bookId: currentId, bookName,author, image,review,totalPages, rating, category,tags,publisher, yearOfPublishing} = book;
  return (
    <div className="hero bg-white min-h-screen">
    <div className="hero-content flex-col lg:flex-row gap-8">
      <img
        src={image}
        className="max-w-sm rounded-2xl  p-20 bg-[#1313130D]" />
      <div className="space-y-6">
        <h1 className="text-5xl playfair font-bold">{bookName}</h1>
        <p className="work-sans text-xl font-medium text-gray-500">By:{author}</p>
        <p className="work-sans text-xl font-medium text-gray-500 border-y border-solid border-gray-300">{category}</p>
        <p className="work-sans text-xl font-medium"><span className="font-bold">Review:</span>{review}</p>
        <div className="flex gap-2">
          <p className="work-sans text-base font-bold">Tag</p>
          {
            tags.map((tag, idx) => <div key={idx} className="badge  bg-[#23BE0A0D] text-[#23BE0A] work-sans font-medium text-base">#{tag}</div> )
          }
        </div>
        <div className="space-y-3">
          <p className="work-sans text-base text-gray-400">Number Of Pages:
            <span className="font-semibold text-black">{totalPages}</span>
          </p>
          <p className="work-sans text-base text-gray-400">Publisher:
          <span className="font-semibold text-black">{publisher}</span>
          </p>
          <p className="work-sans text-base text-gray-400">Year Of Publishing:
            <span className="font-semibold text-black">{yearOfPublishing}</span>
          </p>
          <p className="work-sans text-base text-gray-400">Rating:
            <span className="font-semibold text-black">{rating}</span>
          </p>

        </div>
        <div className="space-x-4">
          <button className="btn btn-outline px-7 py-5 rounded-lg">Read</button>
          <button className="btn btn-info px-7 py-5 rounded-lg text-white">Wishlist</button>

        </div>
      </div>
    </div>
  </div>
  );
};

export default BookDetail;