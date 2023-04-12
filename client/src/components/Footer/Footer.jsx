import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footerAllDiv" style={{ }}>
      <Link className="text" to="/">О компании</Link>
      <Link className="text" to="/contacts">Контакты</Link>
    </div>

  );
}

export default Footer;
