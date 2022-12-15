import { Link } from "react-router-dom";
import './App.css';

function Home() {
    return (
        <div className="head-text">
            <img src="https://wallpapercave.com/wp/wp2971219.jpg" width="100%" />
            <div className="text-on-image">
                <h1 className="fw-bold text-white">Get <span className="fw-bold text-dark">Started</span></h1>
                <br/>
                <h3 className="pt-5 fw-bold text-danger">Wala nako maisip na intro click na lng agad sa log-in</h3>
            </div>
        </div>
    );
}

export default Home;
