import { toast } from "react-toastify";

const getStoredReadList = () =>{
  const storedListStr = localStorage.getItem('read-list');
  if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
  }else{
    return [];
  }
  
}

const addToReadList = (id) => {
  const storedList = getStoredReadList();
  if(storedList.includes(id)){
    toast("Book already exists in read-list.")
  }else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr)
  }
}

const getStoredWishList = () =>{
  const storedWishListStr = localStorage.getItem('wish-list');
  if(storedWishListStr){
    const storedWishlist = JSON.parse(storedWishListStr);
    return storedWishlist;
  }else{
    return [];
  }
}

const addToWishList = (id) =>{
  const storedWishlist = getStoredWishList();
  if(storedWishlist.includes(id)){
    console.log(id, 'book already exists in wishlist');
  }else{
    storedWishlist.push(id);
    const storedWishListStr = JSON.stringify(storedWishlist);
    localStorage.setItem('wish-list', storedWishListStr)
  }
}

export {addToReadList, addToWishList, getStoredReadList}