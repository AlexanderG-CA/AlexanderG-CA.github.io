import React from 'react';
import '../styles.css';

function About() {
  return (
    <div className="about-page">

      <header>
        <h1>Om mig</h1>
      </header>

      <div className="about-container">
        <main>
          <section>
            <h2>Hej, jag heter Alexander Gorie</h2>
            <img src="./profile.jpg" alt="Profilbild" />
            <p className="aboutText">
              Jag är 24 år och en passionerad utvecklare med 2 dagars erfarenhet inom webbutveckling och programmering. 
              Jag älskar att skapa användarvänliga och responsiva webbplatser.
            </p>
          </section>
        </main>

        <aside>
          <h2>Snabbinfo</h2>
          <ul>
            <li><strong>Namn:</strong> Alexander Gorie</li>
            <li><strong>Yrke:</strong> Kebabtekniker</li>
            <li><strong>Erfarenhet:</strong> 5+ år</li>
            <li><strong>Favorit-språk:</strong> HTML, CSS, JavaScript, React</li>
          </ul>
        </aside>
      </div>

      <footer>
        <p>&copy; 2025 Mitt CV</p>
      </footer>
    </div>
  );
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

export default About;