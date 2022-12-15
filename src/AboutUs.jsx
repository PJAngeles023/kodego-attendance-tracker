import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <div className="head-text">
            <img src="https://wallpapercave.com/wp/wp2971219.jpg" width="100%" />
            <div className="text-on-image">
                <h1 className="fw-bold text-dark">About US</h1>
                <br/>
                <h2 className="pt-5 fw-bold text-dark"> This game is used to enjoy extra time with classmates built with React.JS</h2>
                <h1 className="pt-5 fw-bold text-white">Game under development</h1>
                <br/>
                <h3 className="pt-5 fw-bold text-white">Will add realtime chat feature soon</h3>
            </div>
        </div>
    </div>
  );
}

export default AboutUs;
