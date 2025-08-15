export default function ComplexFooter() {
  return (
    <>
      <footer className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">SonusHUB</h5>
            <p className="text-body text-sm pe-5">
              SonusHUB adalah platform B2B terdepan untuk material kelistrikan dan energi terbarukan, menyediakan solusi lengkap untuk kebutuhan bisnis Anda.
            </p>
            <h6 className="mt-4 fw-bold">Kontak Kami</h6>
            <a href="https://wa.me/6282180000575" target="_blank" className="text-body text-sm d-block">
                <i className="bi bi-whatsapp me-1"></i>
                <span>+62 821-8000-0575</span>
            </a>
            <a href="mailto:admin@solar-nusantara.id" className="text-body text-sm d-block">
                <i className="bi bi-envelope me-1"></i>
                <span>admin@solar-nusantara.id</span>
            </a>
          </div>

          <div className="col-md-2 offset-md-1 mb-4">
            <h6 className="fw-bold">Jelajahi</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-body text-sm">Produk</a></li>
              <li><a href="#" className="text-body text-sm">Kategori</a></li>
              <li><a href="#" className="text-body text-sm">Promo</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Perusahaan</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-body text-sm">Tentang Kami</a></li>
              <li><a href="#" className="text-body text-sm">Kontak</a></li>
              <li><a href="#" className="text-body text-sm">Karir</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Berlangganan Newsletter</h6>
            <p className="text-body text-sm">Dapatkan info terbaru tentang produk dan promo kami.</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Alamat email Anda" />
              <button className="btn btn-dark" type="button">Daftar</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-4 border-top pt-4">
            <div className="copyright text-center text-sm text-body">
                Developed by <a href="https://farrosfr.com" className="text-dark fw-bold" target="_blank">FarrosFR</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


