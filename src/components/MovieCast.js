import React, { Component } from "react";
// import { render } from 'react-dom';
//import Slider from "react-slick";
import './homestyle.css';
import Noimage from './image/download.png';

class MovieCast extends Component {    
      
      constructor()
       {
           super()
           this.state={               
               casts:[], 
    //          // trending:[],
    //         // movieId:[],
           }
       }
       componentDidMount() {
         console.log("this.props.url movie id")
         console.log(this.props.urlid)
       fetch(`https://api.themoviedb.org/3/movie/${this.props.urlid}/credits?api_key=4f29a582a664b1a1b8e7a1dda318ec98`)
       .then(response => response.json())
       .then(data=>
         { console.log("from movie cast:")
          console.log(data.cast.slice(0,5))          
            this.setState({  
                casts:data.cast.slice(0,5)        
           })        
         });  
         
       }
       
  
           
  render()
        {            
        return (        
           <div className="casts">            
            
              {this.state.casts.map((item,i)=>
                (                    
                    <>                      
                    <div key={i} className="cast_item">
                        <div className="cast_item_img" >
                        <img className="item_Img" src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                        alt="title" style={{width:"90%"}}
                        onError={(e)=>{e.target.onerror=null; e.target.src=Noimage}} /> 
                         <p className="cast_item_name">{item.original_name}</p>
                         </div>  
                         
                        </div>
                  
                  </>
                )
            )}                  
             
          </div>   
        );
                 
      }
         
    }
    export default MovieCast;