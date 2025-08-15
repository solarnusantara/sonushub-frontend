import data from '../../public/data.json';
import StoreDoubleColumn from '../components/store/storeDoubleColumn';

export default function ComplexFooter() {
  return (
    <>
      <footer className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h5 className="mt-5">SonusHUB</h5>
            <p className="text-body text-sm pe-5">The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.</p>
          </div>
          <div className="col-12 col-md-8">
            <StoreDoubleColumn title={data.products[1].title}/>
          </div>
          <div className="col-12 mt-5 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-body">
              Developed by <a href="https://farrosfr.com" className="text-dark" target="_blank">FarrosFR (https://farrosfr.com)</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


