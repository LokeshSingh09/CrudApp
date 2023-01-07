import React from "react";

const About=()=> {
    const myStyle={ 
        width:'300px', 
        height:'300px',
    };
    return (
        <div className="container">
        <div className="py-4">
        <h1>About Page</h1>
    
    <img style={myStyle} src="../lokesh.jpg" alt=""/>
    <h6>Created By<h4>Lokesh Rajput</h4> </h6>
        </div>
        </div>
    )
}

export default About;