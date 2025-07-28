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
        <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#8B0000" }}>About You cutie</h1>

        <div style={{ marginBottom: "1rem" }}>
          <h3 
            onClick={() => toggleSection("met")}
            style={headingStyle("met", visibleSection)}
          >
            Happy Birthday
          </h3>
          {visibleSection === "met" && (
            <p style={paraStyle}>
              [.]
            </p>
          )}
        </div>

        

        <div style={{ marginBottom: "1rem" }}>
          <h3 
            onClick={() => toggleSection("fav")}
            style={headingStyle("fav", visibleSection)}
          >
            My Favorite Memory
          </h3>
          {visibleSection === "fav" && (
            <p style={paraStyle}>
              [There are so so many memories with you , i possibly couldnt choose one,like the time we were is lonavala, cuddling skin-to-skin, that was probably the most loved i have ever felt, or when we were dancing to- the night we met, on that same night. You always make me feel so special, for example trads day, you lifted me up when everyone was dancing in the circle, you were around me 24/7, dancing with you the entire day was soo fun, another example, valentines day- you were so cutie the pura time,you brought me bohot jyada sundar flowers, we went to the cutest little cafe, You always make me feel the luckiest girl ever.Every auto ride w you is memorable, because ukw, and also sleeping on your chest with your hands massaging my head, the bestest feeling ever,only you could make autos feel like heaven.Even my birthday, the letter, and you coming here to surprise me, ahhhh so freaking cute...The day we had tons of assignments? and we did everything together, you probably dont even rember it , but it has to be one of our fav memories together, because you were there for me the whole fucking day, and you handled me so well,even when i cried,I loved it so much.Every memory i have with you is special,you make everything so special.plus,tu bhi thoda special hai.]
            </p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <h3 
            onClick={() => toggleSection("special")}
            style={headingStyle("special", visibleSection)}
          >
            Why You’re Special
          </h3>
          {visibleSection === "special" && (
            <p style={paraStyle}>
              [.]
            </p>
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
  padding: "1rem",
  marginTop: "0.5rem",
  borderRadius: "10px",
  border: "1px solid #eed9c4",
  color: "#333"
};

export default Story;
