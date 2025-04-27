import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faSkype, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


import './App.css';
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // ✅ Active les flèches
  };
  const products = [
    {
      id: 1,
      title: "BATTERIE PATONA 1163 POUR...",
      price: "37,815 TND",
      image: "p1.png",
    },
    {
      id: 2,
      title: "CHARGEUR DOUBLE PATONA 1952...",
      price: "42,017 TND",
      image: "p3.png",
    },
    {
      id: 3,
      title: "CHARGEUR DOUBLE PATONA 1952...",
      price: "42,017 TND",
      image: "p2.png",
    },
    {
      id: 4,
      title: "CHARGEUR DOUBLE PATONA 1952...",
      price: "42,017 TND",
      image: "p4.png",
    },
  
   
  ];
  const fourImagesSettings = {
    dots: false,
    infinite: true,
    speed: 1000, // 🔵 Vitesse de transition plus rapide (1 seconde)
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 🟠 Petite pause de 2 secondes entre chaque scroll
    cssEase: "ease", // ✅ Animation plus douce
    arrows: true,
    pauseOnHover: true, // 🔵 En plus : pause si la souris passe dessus
  };
  const oneImageSliderSettings = {
    dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,   // ✅ 1 seule image affichée
  slidesToScroll: 1, // ✅ 1 seule image par scroll
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
  cssEase: "ease",
  centerMode: false,  // 🔵 Ne pas couper les images
  };
  return (
    <Router>
      <div className="header">
      <div className="top-bar">
  <div className="top-bar-content">
    <div className="top-link">
      <img src="/login-icon.png" alt="Login" className="top-icon" />
      <span>Se connecter</span>
    </div>
    <span>|</span>
    <div className="top-link">
      <img src="/account-icon.png" alt="Account" className="top-icon" />
      <span>Compte</span>
    </div>
  </div>
  
</div>


        <div className="top-header">
          <div className="left">
            <img src="/logo-splash.png" alt="Logo" className="logo" />
          </div>

          <div className="center">
            <div className="search-container">
              <input
                type="text"
                placeholder="Rechercher dans notre catalogue"
                className="search-bar"
              />
              <Search className="search-icon" />
            </div>
          </div>

          <div className="right">
          <div className="support">
  <div className="support-phone">
    <img src="/phone-icon.png" alt="Phone" className="phone-icon" />
    70 287 775
  </div>
  <div className="support-text">24/7 Support Online</div>
</div>

          </div>
        </div>

        <nav className="menu">
  <ul className="nav-left">
    <li>
      <Link to="/">Caméscopes et Appareils Photo</Link>
      <ul className="submenu">
      <li><Link to="/">APPAREIL PHOTO</Link></li>
        <li><Link to="/">CAMESCOPE</Link></li>
        <li><Link to="/">OBJECTIF</Link></li>
        <li><Link to="/">CAMERA</Link></li>
      </ul>
    </li>

    <li>
      <Link to="/">Accessoires de Tournage</Link>
      <ul className="submenu">
        <li><Link to="/">TREPIED</Link></li>
        <li><Link to="/">STABILISATEUR</Link></li>
        <li><Link to="/">CROSS CAGE</Link></li>
      </ul>
    </li>

    <li>
      <Link to="/">Post-prod et Diffusion</Link>
      <ul className="submenu">
        <li><Link to="/">TRANSMISSION</Link></li>
        <li><Link to="/">STOCKAGE</Link></li>
        <li><Link to="/">TELEPROMOTEUR</Link></li>
      </ul>
    </li>

    <li>
      <Link to="/">Eclairage Photo/Video</Link>
      <ul className="submenu">
        <li><Link to="/">FLASH</Link></li>
        <li><Link to="/">LUMIERE</Link></li>
        <li><Link to="/">SOFTBOX</Link></li>
      </ul>
    </li>
    <li>
      <Link to="/">Acessoires de Studio</Link>
      <ul className="submenu">
        <li><Link to="/">FOND</Link></li>
        <li><Link to="/">SUPPORT</Link></li>
        <li><Link to="/">STUDIO</Link></li>
      </ul>
    </li>
    <li>
      <Link to="/">Audio</Link>
      <ul className="submenu">
        <li><Link to="/">AUDIO</Link></li>
        <li><Link to="/">MIXAGE</Link></li>
        <li><Link to="/">CASQUE</Link></li>
      </ul>
    </li>
    <li>
      <Link to="/">Mobile Solutions</Link>
      <ul className="submenu">
        <li><Link to="/">FIXATIN</Link></li>
        <li><Link to="/">SOLUTION</Link></li>
        <li><Link to="/">POWER BANK</Link></li>
      </ul>
    </li>
    <li>
      <Link to="/">Consommables</Link>
      <ul className="submenu">
     
        <li><Link to="/">ENERGIES</Link></li>
        <li><Link to="/">STOCKAGES</Link></li>
        <li><Link to="/">CLAP</Link></li>
      </ul>
    </li>
          </ul>
           {/* Panier à droite */}
          
        </nav>

        <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="/slide1.png" alt="Slide 1" className="slide-image" />
          </div>
          <div>
            <img src="/slide2.png" alt="Slide 2" className="slide-image" />
          </div>
          <div>
            <img src="/slide3.png" alt="Slide 3" className="slide-image" />
          </div>
          <div>
            <img src="/slide4.png" alt="Slide 4" className="slide-image" />
          </div>
          <div>
            <img src="/slide5.png" alt="Slide 5" className="slide-image" />
          </div>
          <div>
            <img src="/slide6.png" alt="Slide 6" className="slide-image" />
          </div>
          <div>
            <img src="/slide7.png" alt="Slide 7" className="slide-image" />
          </div>
          <div>
            <img src="/slide8.png" alt="Slide 8" className="slide-image" />
          </div>
          <div>
            <img src="/slide9.png" alt="Slide 9" className="slide-image" />
          </div>
          <div>
            <img src="/slide10.png" alt="Slide 10" className="slide-image" />
          </div>
        </Slider>
      </div>
      <div className="images-right">
        <img src="/1.png" alt="Side 1" className="side-image" /><br></br>
        <img src="/2.png" alt="Side 2" className="side-image" />
        
      </div><br></br>
      <div className="products-section">
      <h2>Nouveaux Produits</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="new-badge">NOUVEAU</div>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">{product.price}</p>
            <div className="product-buttons">
  <button className="view-button">👁️</button>
  <button className="add-to-cart-button">Ajouter au panier</button>
</div>
          </div>
        ))}
      </div>
      <div className="four-images-slider">
    <h2>Nos Marques</h2>
  <Slider {...fourImagesSettings}>
    <div><img src="s1.png" alt="Image 1" className="small-slide" /></div>
    <div><img src="s2.png" alt="Image 2" className="small-slide" /></div>
    <div><img src="s3.png" alt="Image 3" className="small-slide" /></div>
    <div><img src="s4.png" alt="Image 4" className="small-slide" /></div>
    <div><img src="s5.png" alt="Image 5" className="small-slide" /></div>
    <div><img src="s6.png" alt="Image 6" className="small-slide" /></div>
    <div><img src="s7.png" alt="Image 1" className="small-slide" /></div>
    <div><img src="s8.png" alt="Image 2" className="small-slide" /></div>
    <div><img src="s9.png" alt="Image 3" className="small-slide" /></div>
    <div><img src="s10.png" alt="Image 4" className="small-slide" /></div>
    <div><img src="s11.png" alt="Image 5" className="small-slide" /></div>
    <div><img src="s12.png" alt="Image 6" className="small-slide" /></div>
    <div><img src="s13.png" alt="Image 3" className="small-slide" /></div>
    <div><img src="s14.png" alt="Image 4" className="small-slide" /></div>
    <div><img src="s15.png" alt="Image 5" className="small-slide" /></div>
    <div><img src="s16.png" alt="Image 6" className="small-slide" /></div>
    {/* tu peux ajouter autant que tu veux */}
  </Slider>
</div>
    </div>
    <h2 className="t">DEALS</h2>
<div className="two-sliders-section">

  <div className="single-slider-left">
 
    <Slider {...oneImageSliderSettings}>
   
    <div>
            <img src="q1.png" alt="Slide 1" className="left-image" />
          </div>
          <div>
            <img src="q2.png" alt="Slide 2" className="left-image" />
          </div>
          
    </Slider>
  </div>

  <div className="single-slider-right" style={{ flex: 1 }}>
  <h2 className="t">DEPUIS NOTRE BLOG</h2>
    <Slider {...oneImageSliderSettings}>
      <div>
        <img src="q3.png" alt="Slide 2" className="right-image" style={{ width: '100%', borderRadius: '10px' }} />
      </div>
      <div>
        <img src="q4.png" alt="Slide 2" className="right-image" style={{ width: '100%', borderRadius: '10px' }} />
      </div>
      {/* Tu peux rajouter d'autres slides ici */}
    </Slider>
  </div>
</div>
    </div>
    <footer className="footer">
  <div className="footer-container">
    
    {/* Colonne 1 */}
    <div className="footer-column">
      <h4>CONTACTEZ-NOUS</h4>
      <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Adresse: Résidence Alpinia La Nouvelle Soukra- App 1003 La Soukra, Tunisie.</p>
      <p><FontAwesomeIcon icon={faPhoneAlt} /> Téléphone: +216 70 287 775</p>
      <p><FontAwesomeIcon icon={faEnvelope} /> Email: contact@splash-distribution.com</p>
      <p><FontAwesomeIcon icon={faSkype} /> Skype: Splash Distribution</p>
    </div>

    {/* Colonne 2 */}
    <div className="footer-column">
      <h4>VOTRE COMPTE</h4>
      <ul>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} /> Informations personnelles</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} /> Commandes</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} /> Avoirs</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} /> Adresses</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} /> My wishlists</a></li>
      </ul>
    </div>

    {/* Colonne 3 */}
    <div className="footer-column">
      <h4>PRODUITS</h4>
      <ul>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} /> Promotions</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} /> Nouveaux produits</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faPlay} /> Meilleures ventes</a></li>
      </ul>
    </div>

    {/* Colonne 4 */}
    <div className="footer-column">
      <h4>NEWSLETTER</h4>
      <p>Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela nos informations de contact dans les conditions d'utilisation du site.</p>
      <div className="newsletter-input">
        <input type="email" placeholder="Entrez votre Email..." />
        <button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>

  </div>

  {/* 🔥 Ajout de la bande grise ici */}
  <div className="footer-gray-line">
  <a href="#"> Sitemap | </a> 
    <a href="#">Contactez-nous | </a> 
    <a href="#">Livraison</a>
  </div>

  {/* Bas de footer */}
  <div className="footer-bottom">
    <div className="social-icons">
      <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>
    <p>Copyright 2021 <span>Splash Distribution</span>. Tous droits réservés.</p>
  </div>
</footer>
    </Router>
  );
}

export default App;
