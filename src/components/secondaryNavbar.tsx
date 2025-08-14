const SecondaryNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-1">
      <div className="container justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-sm" href="#">Beranda</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-sm" href="#">Kategori</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-sm" href="#">Merk</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-sm" href="#">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
