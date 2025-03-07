

const ListedBook = ({readbook}) => {
  const {bookId, bookName,author, image,totalPages, rating, category,tags,publisher, yearOfPublishing} = readbook;
  return (
    <div className="p-6 flex gap-6 bg-white">
     <div className="w-[230px] h-[230px] bg-gray-600 rounded-2xl">
        <img src={image} alt={bookId} className="h-[172px] mx-[74px] my-11"/>
     </div>
     <div className="space-y-5">
        <p className="playfair text-2xl font-bold">{bookName}</p>
        <p className="work-sans text-base font-medium">By: {author}</p>
        <div className="flex gap-4">
            <div className="flex gap-2">
              <p className="work-sans text-base font-bold">Tag</p>
              {
                tags.map((tag, idx) => <div key={idx} className="badge  bg-[#23BE0A0D] text-[#23BE0A] work-sans font-medium text-base">#{tag}</div> )
              }
            </div>
            <p className="work-sans text-base text-gray-400">Year Of Publishing:{yearOfPublishing}</p>
        </div>
        <div className="flex gap-2">
          <p className="work-sans text-base text-gray-400">Publisher: {publisher}</p>
          <p className="work-sans text-base text-gray-400">Pages: {totalPages}</p>
        </div>
        <div className="flex gap-4">
          <button className="btn work-sans text-base rounded-[30px] bg-[#328EFF26] text-[#328EFF]">Category: {category}</button>
          <button className="btn work-sans text-base rounded-[30px] bg-[#FFAC3326] text-[#FFAC33]">Rating: {rating}</button>
          <button className="btn work-sans text-base rounded-[30px] bg-[#23BE0A] text-white">View Details</button>
        </div>
     </div>
    </div>
  );
};

export default ListedBook;