import "./homestyle.css";
import Hero from "./Hero";
import {Link} from "react-router-dom";
import Noimage from './image/download.png';

const MovieCard =({movie}) =>
{    
 
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`    
    const detailUrl = `/movies/${movie.id}`
    
    return(
        <div className="col-lg-3 col-md-3 col-2 my-4">            
        <div className="card shadow bg-white rounded h-100">
        <img 
        src={posterUrl} 
        className="card-img-top" 
        alt={movie.original_title} 
        onError={(e)=>{e.target.onerror=null; e.target.src=Noimage}}/>
        <div className="card-body">
            <h6 className="card-title">{movie.original_title}</h6>
            <h6>⭐{movie.vote_average}/10</h6>                    
        </div>
        <Link to={detailUrl} className="btn btn-primary card_btn mt-auto">Show details</Link>
        </div>
        </div>
        )
        
}
const SearchView = ({keyword, searchResults}) => {
    const title=`You are searching for ${keyword}`    
    // console.log(searchResults, "are the search results")

     const  resultsHtml = searchResults.map((obj, i)=>
      {        
          return <MovieCard movie={obj} key={i} />
      })
    
  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
      <div className="container">
      <div className="row">
          {resultsHtml}
          </div>
          </div>
      }
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old. Richard McClintock, a Latin professor 
            at Hampden-Sydney College in Virginia, looked up one of the more obscure 
            Latin words, consectetur, from a Lorem Ipsum passage, and going through 
            the cites of the word in classical literature, discovered the undoubtable source.              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchView;
