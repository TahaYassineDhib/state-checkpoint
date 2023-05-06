import React from "react";
import { useState } from 'react';



function Profile() {
const [display , setDisplay] = useState(true);
const handleDisplay = () => {
  setDisplay(!display);
}
let buttonText ;
display ? buttonText ="hide" : buttonText ="Show more"; 

  return (
    <div className="container">
      <img
        src="https://www.kindpng.com/picc/m/4-42757_full-stack-developers-developer-png-transparent-png.png"
        alt="img"
      />
      <div className="info">
        { display &&
        <div className="display">
          <p><span>Name</span>: Taha Yassine Dhib</p>
          <p><span>Bio:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p><span>Profession:</span> Web Developer</p>
        </div>
}
        <button onClick={() => handleDisplay()}>{buttonText}</button>
      </div>
    </div>
  );
}

export default Profile;
