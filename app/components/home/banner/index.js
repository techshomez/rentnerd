import "./banner.css";
import { BsArrowRight } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1>
          Finding your new <br />
          home is simple
        </h1>
        <p>
          With their long working hours, cultural obsession with work, and
          high-stakes schooling system, South Koreans live life in the fast
          lane. Everyone has the same aim: to be successful.
        </p>
        <div className="search">
          <input type="text" placeholder="Search" />
          <i>
            <BsArrowRight />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Banner;
