import React, { Component } from "react";
import Slider from "react-slick";
import './homestyle.css';

// import { useState, useEffect } from "react";


export default class WatchTrailer extends Component {    
    
    constructor()
    {
        super()
        this.state={               
            films:[],            
        }
    }
    componentDidMount() {
      console.log("this.props.urlid")
    console.log(this.props.urlid)
    fetch(`https://api.themoviedb.org/3/movie/${this.props.urlid}/videos?api_key=4f29a582a664b1a1b8e7a1dda318ec98&language=en-US`)
    .then(response => response.json())
    .then(data=>
      { console.log("from key:")
      //console.log(data.results)      
        this.setState({ 
          films:data.results        
        })        
      })
    }
    render() {
      
      const settings = {        
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear"
        };       
    
      
      return (
        
        <div className="carousel-trailer">
          <h3 className="headtrendmov-trailer">Trailer</h3>
          <hr></hr>
          <Slider {...settings}>
            {this.state.films.map(film=>
                { 
                    const youtubeUrl = `https://www.youtube.com/embed/${film.key}`                                 
                    return <div className="tmovie-trailer">                                        
                   <iframe className="trailerbox" width="400" height="315" 
                    src={youtubeUrl} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>   
                    </div>
                }
            )}
            
          </Slider>
        </div>
      );
    }
    
  }