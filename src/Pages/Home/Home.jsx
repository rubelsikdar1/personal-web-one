import BackgrounHerro from "../../Component/HomeComponents/HerroAria/BackgrounHerro";
import Style from "./Home.module.css"
import SecondHerro from './../../Component/HomeComponents/SecondHerro/SecondHerro';

const Home = () => {
    return (
        <div>
            <div className={Style.homeBody}>
               <BackgrounHerro/>
               <SecondHerro/>
            </div>
        </div>
    );
};

export default Home;