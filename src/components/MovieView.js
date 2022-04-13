import './homestyle.css';
import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import WatchTrailer from "./WatchTrailer";
import MovieCast from "./MovieCast";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MovieView =()=> {
    const {id} = useParams()
    // console.log(id)
    const [movieDetails, setMovieDetails] = useState({})
    // const [movieTrailer, setMovieTrailer] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>
    {
        console.log("make an api request", id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4f29a582a664b1a1b8e7a1dda318ec98&language=en-US`)
        .then(response=>response.json())
        .then(data=>
            {console.log("movie details")
                console.log(data)
                setTimeout(()=>{
                    setMovieDetails(data)
                    setIsLoading(false)
                },2000)
            })
    },[id])
    
    function renderMovieDetails()
    {
        if(isLoading)
        {
            return <Hero text="Loading..."/>
        }
        if(movieDetails)
        {
            const posterPath=`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl=`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
            return (
            <>
            <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
<section className="mv_detail">
            <div className="container my-5 movie_details">
                <div className="row mdetails"
                style={{backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${backdropUrl})` }} >

                    <div className="col-lg-3 mt-5">
                        <img 
                        src={posterPath} 
                        alt={movieDetails.original_title}
                        className="carddetail-img-top img-fluid border border-white" />
                    </div>
                    <div className="col-lg-9 detailswrite">
                        <h2 className="card-title">{movieDetails.original_title}</h2>
                        <hr></hr>
                        <div className="genres">
                        {
                        movieDetails.genres && movieDetails.genres.slice(0,5).map((genre,i)=>
                        (<span key={i} className="genres_item">{genre.name}</span>))
                        }
                    </div>
                    <br></br>
                        <p className="movdesc">{movieDetails.overview}</p>
                        <p className="movdesc"><strong>Status:</strong> {movieDetails.status}</p>
                        <p className="movdesc"><strong>Tag line: </strong>
                         {movieDetails.tagline}
                        </p>
                        <h3 className="castheader">Casts</h3>
                        <MovieCast urlid={id} />
                    </div>

                    
                </div>
            </div>
            </section>
            <section className="trailer_section">
            
            <WatchTrailer urlid={id} />  

            </section>
           
            </>)
        }
    }
    return renderMovieDetails()
}
export default MovieView;