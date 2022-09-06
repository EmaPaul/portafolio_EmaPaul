import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-info">
            <h1>Emmanuel Paul Carrillo Carpio</h1>
            <p>Arequipa - Perú 🔴⚪🔴</p>
        </div>
        <div className="footer-contact">
            <h3>Contacteme</h3>
            <p>y pongamonos manos a la obra</p>
        </div>
        <div className="footer-sns">
            <div className="design-by">
                Diseñado por Emmanuel Paul Carrillo Carpio
            </div>
            <div className="sns-links">
                <a href="https://www.linkedin.com/in/emmanuel-pa%C3%BAl-carrillo-carpio/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>
                <a href="https://github.com/EmaPaul" target="_blank" rel="noreferrer">
                    <i className="fab fa-github github"></i>
                </a>
                <a href="mailto:enmanuelpaulcarrillo.rakata900@gmail.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-google google"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}


export default Footer