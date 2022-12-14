import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="p-4 border rounded mt-4 mb-2">
        <h3>
          Welcome, <strong>Bryl Lim</strong> <span className="badge bg-light text-dark rounded-pill float-end"><small>WD29</small></span>
        </h3>
        <p>
          bryl@kodego.ph
          <Link to="/" className="float-end">← Logout</Link>
        </p>
        <hr />
        <p className="text-center">
          <span className="badge bg-light text-dark">December 14, 2022</span>
        </p>
        <p className="display-1 fw-bolder text-center">3:00 PM</p>
        <div className="text-center">
          <button className="btn btn-lg btn-dark p-5">🕘 Time In</button>
          &nbsp;
          <button className="btn btn-lg btn-dark p-5" disabled>
            🕡 Time Out
          </button>
          <p className="mt-4"><small>For whole day absences, please email your valid excuse to <strong>queza@kodego.ph</strong>, CC: <strong>classroommanagement@kodego.ph</strong> and provide the necessary documents.</small></p>
          <button className="btn btn-primary w-100">
            Submit →
          </button>
          <p className="text-secondary mt-3" style={{fontSize: "9px"}}>By clicking submit, I acknowledge that I have truthfully encoded my attendance for the specified date and time and agree to be bound thereby.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
