// src/pages/ComplimentGallery.jsx
import React from "react";
import "./ComplimentGallery.css";
import Header from "../components/Header";

const compliments = [
  "Just looking at u evrey morning makes my life better",
  "Your smile is so cute.",
  "you have the prettiest hair.",
  "Your hugs feel so safe.",
  "You're so BIG.",
  "I love your deep voice so fucking hot.",
  "i love how u can lift me and toss me around .",
  "your passion and your drive s probably the best thing about you.",
  "You're my safe space.",
  "You're kinda funny, merese jyaada nahi.",
  "I can trust you with everything.",
  "I love beinf lovey dovey w you.",
  "You’re my favorite notification",
  "Everything reminds me of you.",
  "You make me so proud w everything you do every single day.",
  "You get on my nerves, but you get on all of my nerves iykwim.",
  "i DIE when u give me forehead kisses.",
  "You're the best part of my day.",
  "You're kissi video are the cutest.",
  "you are so tall i love it.",
  "your eyes are really beautiful.",
  "ur face structure is so hot .",
  "you are soo strong your fingers are prolly stronger than my entire body.",
  "You're really cutie.",
  "you make me blush without even trying",
  "You're super hardworking.",
  "I love hen ur daddy mode is on and u plan stuff.",
  "i love when u yap like a cute coms nerd.",
  "i love how u always accept me yelling at u even tho im way smaller and u could like easily beat me up.",
  "i get so fucking happy when u randomly text me.",
  "You're an amazing son, bf, bhaiyu everything.",
  "you suck at picking up calls(oops sorry).",
  "you are effortlessly hawtt.",
  "i love love love ur chest sm.",
  "cuddling w u in lonavala has so far been the best exp ive had ever.",
  "You get me excited aboout coding and life in general.",
  "you are so tall (twice mentioning worthy hai).",
  "i love how ur non-chalant to baaki log but ekdum softy to me.",
  "You're the perfect combination of a bully plus lover.",
  "u never judge me talking to u is the easiest thing.",
  "u dont talk a lot about ur feelings but ur really strong ily",
  "You're my everything i love you babe."
];

const ComplimentGallery = () => {
  return (
    <>
    <Header/>
    <div className="compliment-page">
      <h1 className="compliment-title">Tiny Things I Love About You</h1>
      <div className="compliment-grid">
        {compliments.map((text, index) => (
          <div key={index} className="compliment-card">
            {text}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ComplimentGallery;
