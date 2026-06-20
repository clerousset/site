import React, { useState } from 'react';
import './App.css';

// A reusable Component for a "Card"
function InfoCard({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function App() {
  // State to handle a simple "Like" button counter
  const [likes, setLikes] = useState(0);

  return (
    <div className="container">
      {/* Header Section */}
      <header>
        <h1>Welcome to My React Site</h1>
        <p>Building simple things with components.</p>
      </header>

      {/* Main Content Section */}
      <main>
        <section className="grid">
          <InfoCard 
            title="About Me" 
            description="I am a developer learning React. It's fun!" 
          />
          <InfoCard 
            title="My Skills" 
            description="HTML, CSS, JavaScript, and React." 
          />
          <InfoCard 
            title="My Goal" 
            description="To build amazing web applications." 
          />
        </section>

        {/* Interactive Section */}
        <section className="interactive">
          <h2>Interaction Test</h2>
          <p>This button uses React "State":</p>
          <button onClick={() => setLikes(likes + 1)}>
            ❤️ Likes: {likes}
          </button>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <p>© {new Date().getFullYear()} My Simple Website</p>
      </footer>
    </div>
  );
}

export default App;