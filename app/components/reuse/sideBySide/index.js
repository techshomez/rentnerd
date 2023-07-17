import SmallButton from "../button/small";
import "./sidebyside.css";
import Image from "next/image";

const SideBySide = ({ title, p_1, p_2, image, main__class, link }) => {
  return (
    <div className="side">
      <div className={main__class}>
        <div className="left">
          <Image
            src={image}
            className="side__img"
            width="500"
            height="100"
            alt=""
          />
        </div>
        <div className="right">
          <h1>{title}</h1>
          <p>{p_1}</p>
          <p>{p_2}</p>
          <SmallButton name={link} />
        </div>
      </div>
    </div>
  );
};

export default SideBySide;
