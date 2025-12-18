import { createContext, useState } from "react";
import { useContext } from "react";
import api from "../config/axios";
import { useEffect } from "react";
const NewsContext = createContext();

const NewsProvider = ({children}) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 
  const fetchNews=async(url)=>{
    // Function to fetch news data from an API
    setIsLoading(true);
    try {
    const res= await api.get(`${url}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
    setIsLoading(false);
    return res.data;
    } catch (error) {
      setIsLoading(false);
      console.log(error)
    }
  }
  
   const value={
    news,
    setNews,
    fetchNews,
    isLoading
  }
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export default NewsContext;

const useNewsContext=()=>{
  return useContext(NewsContext);
}

export {NewsProvider, useNewsContext};