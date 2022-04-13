import React, { Component } from "react";
import Slider from "react-slick";
import './homestyle.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from "./Modal";

export default class MultipleItems extends Component {

    constructor()
    {
        super()
        this.state={               
            films:[], 
            requiredItem: 0,
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
    openModalWithItem(item) 
    {
      console.log("item");
      console.log(item)
      this.setState({
        requiredItem: item
      });
     }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 3
    };
    return (<>
      <div className="carousel">
        <h3 className="headtrendmov">Watch Movie Trailers</h3>
        <Slider {...settings}>
        {this.state.films.map((film,i)=>
                {                     
                    //trending:{film.id}                     
                    const imgUrl = `https://image.tmdb.org/t/p/w500${film.poster_path}`     
                    // const detailUrl = `/movies/${film.id}`
                                        
                    // <Link to={detailUrl}>
                    return <div className="tmovie"> 
                    <span className="badge rounded-pill bg-secondary text-light">⭐{film.vote_average}
                    </span>
                    <img className="trendMovieImg" src={imgUrl}
                    alt="title" style={{width:"90%",height:"250px"}} />                     
                        <div className="overlay">
                        <div className="overlaytitle">   
                            
                        <button className="player-button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => this.openModalWithItem(film.id)}>
                        <FontAwesomeIcon icon={faPlayCircle} />
                        </button>
                        {/* <Modal movieId={film.id}/>                         */} 
                        <br></br>
                        
                        </div>                        
                        </div>    
                        {/* <div>{film.original_title}</div>                     */}                        
                    </div>
                     //</Link>                            
                }
            )}
        </Slider>
      </div>      
      <Modal movId={this.state.requiredItem}/>   
        {/* console.log({this.state.requiredItem}) */}
       
      </>
    );

    
  }
}