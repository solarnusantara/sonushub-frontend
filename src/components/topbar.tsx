const TopBar = () => {
  return (
    <div className="bg-dark text-white py-2">
      <div className="container">
        <div className="d-flex justify-content-end align-items-center">
            <a href="https://wa.me/6282180000575" target="_blank" className="text-white me-4 text-sm">
                <i className="bi bi-whatsapp me-1"></i>
                <span>WA: +62 821-8000-0575</span>
            </a>
            <a href="mailto:admin@solar-nusantara.id" className="text-white text-sm">
                <i className="bi bi-envelope me-1"></i>
                <span>email: admin@solar-nusantara.id</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
