import React from "react";
import Wrapper from "../components/Wrapper";
import { useEffect } from "react";
import { useNewsContext } from "../context/NewsContext";
import Loader from "../components/Loader";

const News = () => {
  const { news, setNews, fetchNews, isLoading } = useNewsContext();
  
useEffect(()=>{
   (async ()=>{
     const data= await fetchNews("everything?q=bitcoin")
     setNews(data.articles) 
   }
   )()
  }, []);

  if(isLoading) return <Loader/>

  return (
    <Wrapper>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {
        news.map((item,index)=>{
          if (!item?.urlToImage) return null;
          return (
          <NewsCard key={index} details={item}/>
          )
        }
        )
      }
         
      </div>
    </Wrapper>
  );
};

const NewsCard = ({details}) => {
  return (
    <div className="card bg-base-300  shadow-sm">
      <figure>
        <img
        className="aspect-video object-contain w-full"
          src={details?.urlToImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{details?.title}</h2>
        <p className="line-clamp-3">
          {details?.description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn badge-outline" onClick={()=>window.open(details?.url)}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default News;
