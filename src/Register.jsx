import { Link } from "react-router-dom";

function Register (){
    return(
        <div>
      <div className="p-4 border rounded mt-4 mb-2">
        <h3 className="mb-4">
          <strong>Register</strong>
        </h3>
        <p>Email Address</p>
        <input type="email" className="form-control"></input>
        <p className="mt-4">Password</p>
        <input type="password" className="form-control"></input>
        <p className="mt-4">Confirm Password</p>
        <input type="password" className="form-control"></input>
        <button className="btn btn-primary mt-3">Create Account →</button>
      </div>
      <div className="mt-3 text-center">
        <Link to="/">Back to login</Link>
      </div>
    </div>
    )
}

export default Register;