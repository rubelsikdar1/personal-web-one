import Style from "./HerroBottom.module.css";
// import { AiFillExclamationCircle } from "react-icons/ai";

const HerroBottom = ({ heading, pera, more, icon }) => {
  return (
    <div>
      <div className={Style.box}>
        <div className={Style.left}>
          <div className={Style.icon}>{icon}</div>
        </div>
        <div className={Style.right}>
          <h2 className={Style.heading}>{heading}</h2>
          <p className={Style.pera}>{pera}</p>
          <p className={Style.more}>{more}</p>
        </div>
      </div>
    </div>
  );
};

export default HerroBottom;
