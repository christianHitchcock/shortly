import React from "react";

const Heroimg = ()  => {
    return (
        <div className="heroimg">
           <img src={process.env.PUBLIC_URL + '/images/illustration-working.svg'} alt='heroimage' />
        </div>
    )
}
 
const Hero = () => {
    return (
        <div className="container" >
             <Heroimg/>
             <div className="container-text">
                <h1>More than just shorter links</h1>
                <p> Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>
                <button> Get Started</button>

             </div>
        </div>
    )
}

export default Hero;