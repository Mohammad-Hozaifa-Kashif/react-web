import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Your custom styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Valid routes */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/cards" element={<MainLayout><CardsPage /></MainLayout>} />
          <Route path="/details" element={<MainLayout><DetailsPage /></MainLayout>} />
          
          {/* Invalid routes show Error 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function Header() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <header>
      <nav>
        <ul style={{ color: 'white' }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/cards" style={{ color: 'white', textDecoration: 'none' }}>Cards</Link></li>
          <li><Link to="/details" style={{ color: 'white', textDecoration: 'none' }}>Details</Link></li>
        </ul>
        <button onClick={handleGetStartedClick}>Get Started</button>
      </nav>

      {/* Modal for Get Started Form */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <h2>Get Started</h2>
            <form>
              <label>First Name:</label>
              <input type="text" name="firstName" required />

              <label>Last Name:</label>
              <input type="text" name="lastName" required />

              <label>Email:</label>
              <input type="email" name="email" required />

              <label>Phone Number:</label>
              <input type="tel" name="phone" required />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

function Home() {
  return (
    <div>
      {/* Content Sections */}
      <ContentSection
        text={<>
          <h2>Aged Care</h2>
          <p>Simple Food Safety Management & Consumer Meal Ordering Software provides comfort to your residents by keeping up-to-date with their rapidly changing meal choices and dietary needs.</p>
        </>}
        imageUrl="/images/aged1.webp"
        reverse={false}
      />

      <ContentSection
        text={<>
          <h2>Hospitals</h2>
          <p>Keep your catering team and nurses informed and doing what they do best—taking care of those who need them most.</p>
        </>}
        imageUrl="/images/hospital3.webp"
        reverse={true}
      />

      <ContentSection
        text={<>
          <h2>Hospitality</h2>
          <p>Support your chefs to achieve the highest standards of food safety compliance by implementing Simple Food Safety Management & Consumer Meal Ordering Software Solution in your commercial kitchen.</p>
        </>}
        imageUrl="/images/hospitality2.webp"
        reverse={false}
      />
    
      {/* Add the Cards section to the Home page */}
      <Cards />
    </div>
  );
}

function CardsPage() {
  return (
    <div>
      <h1>Cards Page</h1>
      <Cards />
    </div>
  );
}

function DetailsPage() {
  return (
    <div>
      <h1>Details Page</h1>
      <p>This page contains additional details about the services.</p>
    </div>
  );
}

function ContentSection({ text, imageUrl, reverse }) {
  return (
    <div className={`content-section ${reverse ? 'reverse' : ''}`}>
      <div className="text">{text}</div>
      <div className="image">
        <img src={imageUrl} alt="content" />
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <img src="/images/card1.webp" alt="Card 1" />
        <h2>1. Schedule a Demo</h2>
        <p>Reach out and schedule a free call to talk about the challenges you are currently facing.</p>
      </div>
      <div className="card">
        <img src="/images/card2.webp" alt="Card 2" />
        <h2>2. Discovery Call</h2>
        <p>Together we'll discuss your business, your needs, and the next steps you need to take.</p>
      </div>
      <div className="card">
        <img src="/images/card3.webp" alt="Card 3" />
        <h2>3. Receive a Quote</h2>
        <p>Once you review your quote and are happy to proceed, our team will commence the installation of Simple Food Safety Management & Consumer Meal Ordering Software on your premises.</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#111', padding: '40px 0', color: 'white' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginBottom: '30px'
      }}>
        {/* Left Section - Logo */}
        <div style={{ textAlign: 'left', minWidth: '200px', margin: '10px' }}>
          <h2>LOGO</h2>
          <p>SLOGAN COMPANY</p>
        </div>

        {/* Center Section - Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flex: '1',
          flexWrap: 'wrap',
          margin: '10px'
        }}>
          <ul style={{ listStyleType: 'none', padding: 0, margin: '10px' }}>
            <li>Weebly Themes</li>
            <li>Pre-sale FAQs</li>
            <li>Submit a Ticket</li>
          </ul>
          <ul style={{ listStyleType: 'none', padding: 0, margin: '10px' }}>
            <li>Services</li>
            <li>Theme Tweak</li>
          </ul>
          <ul style={{ listStyleType: 'none', padding: 0, margin: '10px' }}>
            <li>Showcase</li>
            <li>Widgetkit</li>
            <li>Support</li>
          </ul>
          <ul style={{ listStyleType: 'none', padding: 0, margin: '10px' }}>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Affiliates</li>
            <li>Resources</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Social Icons */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <a href="#" style={{ color: 'white', margin: '0 10px' }}>
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" style={{ color: 'white', margin: '0 10px' }}>
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" style={{ color: 'white', margin: '0 10px' }}>
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" style={{ color: 'white', margin: '0 10px' }}>
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a href="#" style={{ color: 'white', margin: '0 10px' }}>
          <i className="fab fa-flickr"></i>
        </a>
      </div>

      {/* Copyright */}
      <div style={{
        textAlign: 'center',
        borderTop: '1px solid #444',
        paddingTop: '20px'
      }}>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

function Error404() {
  return (
    <div className="error-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
    </div>
  );
}

export default App;
