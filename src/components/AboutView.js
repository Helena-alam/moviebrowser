import './homestyle.css';
import Hero from './Hero';

const AboutView =()=> {
    return (
        <> 
        <Hero text="Let's join the adventure from About"/>
        <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              It is a long established fact that a reader will be distracted by the 
              readable content of a page when looking at its layout. The point of using 
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
              as opposed to using 'Content here, content here', making it look like readable 
              English. Many desktop publishing packages and web page editors now use Lorem 
              Ipsum as their default model text, and a search for 'lorem ipsum' will uncover 
              many web sites still in their infancy.
            </p>
          </div>
        </div>
      </div>
        </>
    )
}
export default AboutView;