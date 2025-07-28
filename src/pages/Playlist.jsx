import React from "react";
import "./Playlist.css";
import Header from '../components/Header';
import blue from '../assets/covers/blue.jpg';
import co2 from '../assets/covers/co2.jpg';
import everybreth from '../assets/covers/everybretah.jpg';
import fallinlove from '../assets/covers/fallinlove.jpg';
import ishq from '../assets/covers/ishq.jpg';
import kasoor from '../assets/covers/kasoor.jpg';
import luther from '../assets/covers/luther.jpg';
import maahi from '../assets/covers/maahi.jpg';
import openarms from '../assets/covers/openarms.jpg';
import rangrez from '../assets/covers/rangrez.jpg';
import tera from '../assets/covers/tera.jpg';
import white from '../assets/covers/white.jpg';

const playlist = [
  {
    title: "Fall in love with you - Montell Fish",
    cover: fallinlove,
    link: "https://open.spotify.com/track/4kJT7Yj6Za01KfKHjb7mZE?si=9c6a157b4af44c21",
  },
  {
    title: "Open Arms - Travis Scott",
    cover: openarms,
    link: "https://open.spotify.com/track/0xaFw2zDYf1rIJWl2dXiSF?si=3aeeb93dbde944b1",
  },
  {
    title: "blue - yung kai",
    cover: blue,
    link: "https://open.spotify.com/track/3be9ACTxtcL6Zm4vJRUiPG?si=796143cfff7b475d",
  },
  {
    title: "Kasoor - Prateek Kuhad",
    cover: kasoor,
    link: "https://open.spotify.com/track/08kTa3SL9sV6Iy8KLKtGql?si=84f2d5f868d74230v",
  },
  {
    title: "Every Breath You Take - The Police",
    cover: everybreth,
    link: "https://open.spotify.com/track/1JSTJqkT5qHq8MDJnJbRE1?si=e15b6acbfbeb43b8",
  },
  {
    title: "White Ferrari - Frank Ocean",
    cover: white,
    link: "https://open.spotify.com/track/2LMkwUfqC6S6s6qDVlEuzV?si=d427534ebc914678",
  },
  {
    title: "Tera Fitoor - Arijit Singh",
    cover: tera,
    link: "https://open.spotify.com/track/1YMLgvsQdE27r30q0fsLeV?si=6afb8094057c4cb7",
  },
  {
    title: "Co2 - Prateek Kuhad",
    cover: co2,
    link: "https://open.spotify.com/track/3hB9lDLyAClYVZivMMl20N?si=620d0116199c4b4f",
  },
  {
    title: "Ishq Hai - Anurag",
    cover: ishq,
    link: "https://open.spotify.com/track/3vCzLB6kS2lGcIpm1OOUsy?si=de93758e21584414",
  },
  {
    title: "luther(with sza) - kendrick lamar",
    cover: luther,
    link: "https://open.spotify.com/track/45J4avUb9Ni0bnETYaYFVJ?si=a47fd17de59d473f",
  },
  {
    title: "O-Rangrez - Shankar smthg",
    cover: rangrez,
    link: "https://open.spotify.com/track/65unGv23guVlRoVlhqFrSg?si=b25736385d1747d5",
  },
  {
    title: "Maahi Ve - A.R. Rahman",
    cover: maahi,
    link: "https://open.spotify.com/track/1sbW5E7w8tnqpYk0Frx8QG?si=1c38dd853cfc4f1c",
  },
 
];

const Playlist = () => {
  return (
    <div>
        <Header/>
    <div className="playlist-container">
        
      <h1>Songs that remind me of u ❤️‍🩹</h1>
      <div className="songs-grid">
        {playlist.map((song, index) => (
          <div className="song-card" key={index}>
            <img src={song.cover} alt={song.title} />
            <p>{song.title}</p>
            <a href={song.link} target="_blank" rel="noopener noreferrer">
              Play on Spotify
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Playlist;
