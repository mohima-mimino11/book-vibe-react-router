import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDB';
import ListedBook from '../ListedBook/ListedBook';
import Book from '../Book/Book';

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const allBooks = useLoaderData();

  useEffect(()=>{
    // worst way
    const storedBooksList = getStoredReadList();
    const storedBooksListInt = storedBooksList.map(id => parseInt(id))
    const readbooksList = allBooks.filter(book => storedBooksListInt.includes(book.bookId));
    setReadBooks(readbooksList)
    console.log(storedBooksList, allBooks, readbooksList);
    
  },[])
  return (
    <div>
      <div className="bg-gray-500 w-full h-24">
        <h3 className="work-sans text-3xl font-bold text-center py-8">Books</h3>
      </div>
      <button className="btn bg-[#23BE0A] px-5 py-5 rounded-lg text-white work-sans text-lg font-semibold mx-auto mt-8 flex justify-center">Sort By</button>
      <Tabs>
        <TabList>
          <Tab><p className="text-lg work-sans text-gray-400">Read Books</p></Tab>
          <Tab><p className="text-lg work-sans text-gray-400">WishList Books</p></Tab>
        </TabList>

        <TabPanel>
            <h2>books I read: {readBooks.length}</h2>
            {
              readBooks.map(readbook => <ListedBook key={readbook.bookId} readbook={readbook}></ListedBook> )
            }
          
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;