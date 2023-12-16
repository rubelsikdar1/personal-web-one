import Style from "./BackgrounHerro.module.css"
import image from "../../../assets/images/thinging-pic.png"
import HerroBottom from './HerroBottom';
import { AiFillExclamationCircle } from "react-icons/ai";


const BackgrounHerro = () => {
    return (
        <div>
           <div className={Style.background}>
                <div className="container">
                <div className={Style.top}>
                    <div className={Style.left}>
                        <h2 className={`${Style.herroHeading} OpenSans700-sh`}>Iam Rubel Sikdar <br /> Web Developer</h2>
                    </div>
                    <div className={Style.right}>
                        <img src={image} className={Style.image} alt="" />
                    </div>
                </div>
                    <div className={Style.ck}>
                        <HerroBottom heading="This is testing text" pera=" Our favorite color tools and websites, from the best palette generators and nice typography, to free stock photos and web" more="Vew more" icon={<AiFillExclamationCircle />}/>

                        <HerroBottom heading="This is testing text" pera=" Our favorite color tools and websites, from the best palette generators and nice typography, to free stock photos and web" more="Vew more" icon={<AiFillExclamationCircle />}/>
                        
                        <HerroBottom heading="This is testing text" pera=" Our favorite color tools and websites, from the best palette generators and nice typography, to free stock photos and web" more="Vew more" icon={<AiFillExclamationCircle />} />

                    </div>
                </div>
           </div>
          
        </div>


    );
};

export default BackgrounHerro;