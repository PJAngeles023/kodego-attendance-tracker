import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="p-4 border rounded mt-4 mb-2">
        <h3 className="mb-4">
          <strong>Login</strong>
        </h3>
        <p>Email Address</p>
        <input type="email" className="form-control"></input>
        <p className="mt-4">Password</p>
        <input type="password" className="form-control"></input>
        <button className="btn btn-primary mt-3">Login</button>
      </div>
      <div className="mt-3 text-center">
        <Link to="/register">Create an account here</Link>
      </div>
    </div>
  );
}

export default Login;
