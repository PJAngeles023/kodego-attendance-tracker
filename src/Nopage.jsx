import { Link } from "react-router-dom";

function Nopage() {
  return (
    <div>
       <p className="display-1 fw-bolder text-secondary mt-5"><strong>404</strong></p>
       <h5 className="text-secondary mb-5">Page not found</h5>
      <div className="mt-3">
        <Link to="/">Back to login</Link>
      </div>
    </div>
  );
}

export default Nopage;
