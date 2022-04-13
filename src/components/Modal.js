
import React, { Component } from "react";
 

 export default class Modal extends Component {    
    constructor() {
         super();    
          this.state={               
             films:[],            
             id: ''
         }
     }  
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('Component received new props', nextProps.movId);
                 console.log("i")
                 console.log(nextProps.movId)
                 fetch(`https://api.themoviedb.org/3/movie/${nextProps.movId}/videos?api_key=4f29a582a664b1a1b8e7a1dda318ec98&language=en-US`)
                    .then(response => response.json())
                    .then(data=>
                           { console.log("from modal fetch:")
                           console.log(data.results)      
                             this.setState({ 
                               films:data.results.slice(0,1)        
                             })        
                             
                             console.log(this.state.films)
                           })                         
                           
                }
   
        
        

    render()
    {
        return (
        <>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Trailer</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          {this.state.films.map(film=>
                { 
                    const youtubeUrl = `https://www.youtube.com/embed/${film.key}`                                 
                    return <div className="tmovie-trailer">                                        
                   <iframe className="trailerbox" width="400" height="350" 
                    src={youtubeUrl} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>   
                    </div>
                }
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>);
    }

    }

