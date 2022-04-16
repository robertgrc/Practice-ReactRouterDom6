import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <h1>Mi Blog Personal</h1>
        <nav>
          <a href="">Inicio</a>
          <a href="">Blog</a>
          <a href="">Acerca de</a>
        </nav>
      </header>
      <main>
        <div>
          <h2>Pagina de inicio</h2>
          <p>Esta es la pagina oficial de nuestro sitio</p>
        </div>
        <div>
          <h2>Blog</h2>
          <ul>
            <li>Articulo #1</li>
            <li>Articulo #2</li>
            <li>Articulo #3</li>
          </ul>
        </div>
        <div>
          <h2>Acerca de</h2>
          <p>Hey guys hellow guys</p>
        </div>
      </main>
    </div>
  );
};

export default Header;
