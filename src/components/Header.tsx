import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container-fluid">
        {" "}
        <Link className="navbar-brand" to="/">
          Dance Center SPIN
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex flex-row">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/">
                Welcome
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/classes">
                Classes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/instructors">
                Instructors
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
