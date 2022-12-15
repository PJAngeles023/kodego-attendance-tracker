import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div class="row">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="https://dy9hpnbyn8tl0.cloudfront.net/kodego-large.svg" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item me-5 ms-5">
                  <a class="nav-link active bg-secondary" aria-current="page" href="#"><Link to="/" className="text-light text-decoration-none">Home</Link></a>
                </li>
                <li class="nav-item me-5 ms-5">
                  <a class="nav-link" ><Link to="/aboutUs" className="text-dark text-decoration-none">About Us</Link></a>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-outline-secondary me-3"type="submit"><Link to="/register" className="text-dark text-decoration-none">Register</Link></button>
                <button class="btn btn-secondary" type="submit"><Link to="/login" className="text-white text-decoration-none">Login</Link></button>
              </form>
            </div>
          </div>
        </nav>
        <div className="col-md-12">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
