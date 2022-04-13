const Hero =({ text, backdrop })=> {
    return (
        <header className="bg-dark text-white hero">
            <div className="hero-content" 
            style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7)0%, rgba(0, 0, 0, 0.3)100%),url(${backdrop})`, 
            height: "100%", width:"100%",backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            
            }}>
                <h1>
                    This is a hero components.
                    
                </h1>
                <h1 className="hero-title">
                Discover the World
                </h1>
            
                <h2 className="hero-subtitle">
                {text}
                </h2>
            
                <button className="hero-button" >
                Search for Movies
                </button>

            </div>
        </header>
        
    )
}

export default Hero;