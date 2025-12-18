import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext';

const Catogary = ({className}) => {
  const {fetchNews,setNews}=useNewsContext()
  const catogary=["business","entertainment","health","science","sports","technology","travel"]
  const handleClick=async(item)=>{
    const res=await fetchNews(`everything?q=${item}`)
    setNews(res.articles)

  }
  return (
    <div className={className}>
      <Wrapper>
          <div  className='flex flex-row mx-auto justify-center overflow-auto gap-4 scrollbar-none py-4'>
             {
              catogary.map((item,index)=>(
             
                 <button key={index} className="btn btn-primary"
                 onClick={()=>handleClick(item)}
                 >{item}</button>
              
              ))
         
             }
              </div>
      </Wrapper>
 
    </div>
  )
}

export default Catogary