import React, { Component } from "react";
import Slider from "react-slick";
import WatchTrailer from "./WatchTrailer";
import './homestyle.css';
import { useState, useEffect } from "react";



//const mid=null;

export default class AutoPlay extends Component {    
  // const [trending, setTrending] = useState([]);  
  //const [movieId, setMovieId] : useState([]);
    
    constructor()
    {
        super()
        this.state={               
            films:[], 
           // trending:[],
          // movieId:[],
        }
    }
    componentDidMount() {
    
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=4f29a582a664b1a1b8e7a1dda318ec98`)
    .then(response => response.json())
    .then(data=>
      { console.log("from home:")
      console.log(data.results)          
        this.setState({  
        films:data.results        
        })        
      });  

    }

    

    render() {

      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"        
      };      

      
      return (        
         <div className="carousel">
          <h3 className="headtrendmov">Trending Movies</h3>
          <hr></hr>
          <Slider {...settings}>
            {this.state.films.map((film,i)=>
                {                     
                    //trending:{film.id}                     
                    const imgUrl = `https://image.tmdb.org/t/p/w500${film.poster_path}`                                 
                    return <div className="tmovie"> 
                    <span className="badge rounded-pill bg-secondary text-light">⭐{film.vote_average}
                    </span>
                    <img className="trendMovieImg" src={imgUrl}
                    alt="title" style={{width:"90%",height:"450px"}} />                     
                        <div className="overlay">
                        <div className="overlaytitle">
                        {/* <h4 className="invisid">{film.id}</h4>                         */}
                        <h4>{film.original_title}</h4>
                        Release on : {film.release_date}
                        <br></br>{film.vote_count}
                        </div>                        
                        </div>                        
                    </div>
                    
                }
            )}
            
          </Slider>
        </div>   
      );

      
      
    }
   
        

       
  }