import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import {Link} from 'gatsby';

const Header = () => (
  <header className="top-0 bg-white shadow font-montserrat text-tertiary">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8 max-w-full">
     
      <div className="flex mt-4 text-sm sm:mt-0 pr-4 font-semibold">
      <Link to={'/landing-page'} className= "text-primary pr-4">
          Inicio      
          </Link>
        <AnchorLink className="px-4" href="#services">
          Empresas
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Blog
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Preguntas frecuentes
        </AnchorLink>
      </div>

      <div className="flex items-center text-2xl">
        <div className="w-48 ">
          <img
          src="http://wpprueba.local/wp-content/uploads/2021/11/logo-monet.png"
          alt="new"
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Descargar Monet</Button>
      </div>
    </div>
  </header>
);

export default Header;
