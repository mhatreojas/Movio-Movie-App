import MovieCard from "../components/MovieCard"
import { useState,useEffect } from "react"
import React from "react"
import "../css/Home.css"
import { searchMovies,getPopularMovies } from "../services/api"


export function Home() {
  const [searchQuery, setSearchQuery] =  useState("");
  const [movies,setMovies] =useState([]);
  const [error,setError] =useState(null);
  const [loading,setLoading] =useState(true);
  useEffect(()=>{
    const loadPopularMovies=async ()=>{
      try{
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies)
      }catch(err){
        console.log(err);
        setError("Failed to Load Movies")
      }
      finally{
        console.log("Movies fetched")
        setLoading(false)
      }
    }
    loadPopularMovies();
  },[])
  const handleSubmit =async (e) => {
    e.preventDefault();
 if(!searchQuery.trim()){
return
 }
 if(loading){
  return  
 }
 setLoading(true)
 try{
const searchResults=await searchMovies(searchQuery)
setMovies(searchResults)
setError(null)
 }
 catch(err){
  console.log(err)
  setError("Failed to search movies...")
 }finally{
  setLoading(false)
 }
 
  }
  return (<>
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input type="text" placeholder="Search for Movies..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type='submit' className="search-button" >
          Search
        </button>
      </form>
       {error && <div className="error">{error}</div>}
      {loading?(<div className="loading">Loading ...</div>):<div className="movies-grid">
        {movies.map((movie) => (
         <MovieCard movie={movie} key={movie.id} />))}
      </div>}
      

    </div>

  </>)
}
