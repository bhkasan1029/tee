import React from 'react';
import Header from '../components/Header';
import './Memories.css'; // Create this CSS file
import img1 from '../assets/1.JPG';
import img2 from '../assets/2.JPG';
import img3 from '../assets/3.JPG';
import img4 from '../assets/4.JPG';
import img5 from '../assets/5.JPG';
import img6 from '../assets/6.JPG';
import img7 from '../assets/7.JPG';
import img8 from '../assets/8.JPG';
import img9 from '../assets/9.JPG';
import img10 from '../assets/10.JPG';
import img11 from '../assets/11.jpg';
import img13 from '../assets/13.png';
import img14 from '../assets/14.png';
import img17 from '../assets/17.png';
import img18 from '../assets/18.png';
import img21 from '../assets/21.png';


function Memories() {
  const photos = [
    { src: img1, caption: "Our first couple kinda pic" },
    { src: img18, caption: "cutie hehe chinese dikhray" },
    { src: img2, caption: "loved talking iss din cute" },
    { src: img3, caption: "loving the handprints" },
    { src: img10, caption: "bhukkad hehe mere jaisa" },
    { src: img4, caption: "pottery hehe" },
    { src: img5, caption: "tinder worthy pic(not that ull need it)" },
    { src: img6, caption: "u look so glowy and pretty" },
    { src: img7, caption: "UR ARMS AROUND ME SO CUTE" },
    { src: img8, caption: "love doing hackathons even thoiss baar ditch kardiya" },
    { src: img9, caption: "cutie u look" },
   
    { src: img11, caption: "he looks so tiny YOU ARE SO CUTE" },
    { src: img13, caption: "valentiness" },
    { src: img14, caption: "u look so hot in this sweatshirt" },
    { src: img17, caption: "best kpose" },
   
    { src: img21, caption: "ur so comfyy" },
   
    // add more here
  ];

  return (
    <div>
      <Header />
      <div className="memories-container">
        {photos.map((photo, index) => (
          <div className="photo-card" key={index}>
            <img src={photo.src} alt={`Memory ${index}`} />
            <p>{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Memories;
