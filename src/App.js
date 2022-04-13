import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";

//TMDB API KEY = 4f29a582a664b1a1b8e7a1dda318ec98
// EXAMPLE LINK FOR MOVIE SEARCH=https://api.themoviedb.org/3/search/movie?api_key=4f29a582a664b1a1b8e7a1dda318ec98&language=en-US&query=star%20wars&page=1&include_adult=false

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  

  // const [isLoading, setIsLoading] = useState(true)

  const searchMovies = async()=>
  {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4f29a582a664b1a1b8e7a1dda318ec98&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data=>
      {
        //console.log(data)
        setSearchResults(data.results)
        // setIsLoading(false)
      })
  }

  useEffect(()=>
  {
    if(searchText)
    {
      searchMovies();
    }
  },[searchText]) 
  
  
  //searchTrendMovies();
  const onSubmit= (e)=>
   {
     e.preventDefault();    
     setSearchText(searchText);
        searchMovies();

   }

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} onSubmit={onSubmit}/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="about" element={<AboutView />} />
        <Route path="search" element={<SearchView keyword={searchText} searchResults={searchResults}/>} /> 
        <Route path="/movies/:id" element={<MovieView/>} />
        <Route path="/*" element={<PageNotFound />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

function PageNotFound(){
  return (
    <div className="pagenotfound">           
    </div>
  )
}

export default App;
