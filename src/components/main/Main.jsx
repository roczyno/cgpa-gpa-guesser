import "./main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div className="buttonsContainer">
        <Link to="/gpa">
          <button className="btn">Calculate GPA</button>
        </Link>
        <Link to="/cgpa">
          <button className="btn">Calculate CGPA</button>
        </Link>
        <Link to="/gradelist">
          <button className="btn">View GradeList</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
