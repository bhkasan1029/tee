import React, { useState } from 'react';
import Header from '../components/Header';

function Story() {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div style={{ backgroundColor: "#fdf5e6", minHeight: "100vh", fontFamily: "serif" }}>
      <Header />
      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "1.5rem", color: "#8B0000" }}>About you my cutie</h1>

        {/* Happy Birthday Section */}
        <div style={{ marginBottom: "1rem" }}>
          <h3 onClick={() => toggleSection("met")} style={headingStyle("met", visibleSection)}>
            Happy Birthday
          </h3>
          {visibleSection === "met" && (
            <div style={paraStyle}>
             <p>    HAPPY BIRTHDAY BABEEEE AHHHHH , our first birthday together yayyy, you're finally 19 , ive been 19 for like ages now , pedo jaisa feel horaha hai , but anyways yayyy I LOVE YOU SO MUCH . You're an amazing person, i have never ever seen anyone like you before, you are literally everything ive ever wanted. I love spending every day with you,be it college mein, lonavla, auto, stairs, cafes, everything, and i can't wait to spend the rest of my life with you, and spending all your money hehehe. you make me the happiest girl alive babe.You are my safe space,after every fight, we get closer,which is only because you listen to everything i say, and actually try and make me feel better.I know there are a lot of things you dont talk about, with me ,but I want to be your safe space and i hope you know im always by your side.The things i've felt for you, i have never ever felt it before, you are my first love, my first everything. I love you so much cutie, happy birthday. 
             </p>
            </div>
          )}
        </div>

        {/* Favorite Memory Section */}
        <div style={{ marginBottom: "1rem" }}>
          <h3 onClick={() => toggleSection("fav")} style={headingStyle("fav", visibleSection)}>
            My Favorite Memory
          </h3>
          {visibleSection === "fav" && (
            <div style={paraStyle}>
 <p>There are so so many memories with you , i possibly couldnt choose one,like the time we were is lonavala, cuddling skin-to-skin, that was probably the most loved i have ever felt, or when we were dancing to- the night we met, on that same night. You always make me feel so special, for example trads day, you lifted me up when everyone was dancing in the circle, you were around me 24/7, dancing with you the entire day was soo fun, another example, valentines day- you were so cutie the pura time,you brought me bohot jyada sundar flowers, we went to the cutest little cafe, You always make me feel the luckiest girl ever.Every auto ride w you is memorable, because ukw, and also sleeping on your chest with your hands massaging my head, the bestest feeling ever,only you could make autos feel like heaven.Even my birthday, the letter, and you coming here to surprise me, ahhhh so freaking cute...The day we had tons of assignments? and we did everything together, you probably dont even rember it , but it has to be one of our fav memories together, because you were there for me the whole fucking day, and you handled me so well,even when i cried,I loved it so much.Every memory i have with you is special,you make everything so special.plus,tu bhi thoda special hai.
 </p>
            </div>
          )}
        </div>

        {/* Why You're Special Section */}
        <div style={{ marginBottom: "1rem" }}>
          <h3 onClick={() => toggleSection("special")} style={headingStyle("special", visibleSection)}>
            Why You’re Special
          </h3>
          {visibleSection === "special" && (
            <div style={paraStyle}>
              <p>From the first time we met,when we laughed at each other’s names in the lift, realizing we both have a shitty sense of humour, I knew you were going to be someone really important to me. You kept checking all the boxes. I felt close to you on the very first day. You bullied me like I was your own, you loved music (so did I), and everything just felt right with you.

That walk, where we asked around aimlessly and ended up at a mandir, that’s a really, really core memory for me. From the moment we met in the lift to that random walk... it’s all so clear to this day in my head.

After that, everything just went uphill. We started flirting, and I started blushing 24/7. I'm so glad we’re dating. I love that we can be ourselves around each other without ever being scared of being judged,not even for a second.You are the funnest person I know and there is no one i would rather spend my time with.i love you.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const headingStyle = (key, active) => ({
  cursor: "pointer",
  color: key === active ? "#b22222" : "#5c3d2e",
  fontWeight: key === active ? "bold" : "normal",
  background: "#f8e9d0",
  padding: "10px",
  borderRadius: "10px",
  border: "1px dashed #c19a6b",
  boxShadow: key === active ? "2px 2px 6px rgba(0,0,0,0.1)" : "none",
  transition: "all 0.3s ease"
});

const paraStyle = {
  background: "#fff8f0",
  padding: "1.2rem",
  marginTop: "0.5rem",
  borderRadius: "10px",
  border: "1px solid #eed9c4",
  color: "#333",
  fontSize: "1.05rem",
  lineHeight: "1.6"
};

export default Story;
