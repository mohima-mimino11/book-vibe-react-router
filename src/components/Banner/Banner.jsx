import bannerImage from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <img
            src={bannerImage}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div className='space-y-12'>
            <h1 className="playfair text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
           
            <button className="btn bg-[#23BE0A] work-sans text-white text-xl font-bold">View The List</button>
          </div>
        </div>
    </div>
  );
};

export default Banner;