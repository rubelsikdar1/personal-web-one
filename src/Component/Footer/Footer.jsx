import Style from "./Footer.module.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className={Style.footerBg}>
        <div className={`${Style.footerFlex} container`}>
          <div className={Style.quickManu}>
            <h3>QUICK MENU</h3>
            <ul>
                <li><Link className={Style.a} to="home">Home</Link>  </li>
                <li><Link className={Style.a} to="protfolio">Protfolio</Link>  </li>
                <li><Link className={Style.a} to="contact">Contact</Link>  </li>
            </ul>
          </div>
          <div className={Style.resentPost}>
            <h3>RECENT POSTS</h3>
            <p>NO Post Avelable</p>
            <p>NO Post Avelable</p>
            <p>NO Post Avelable</p>
          </div>
          <div className={Style.form}>
            <form action="">
              <h3>SUBSCRIBE OUR NEWSLETTER</h3>
              <label htmlFor="email">
                {" "}
                Email address: <br/>
                <input
                  className={Style.emailInput}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address"
                />
              </label>
              <input type="submit" className={Style.submitBtn} value="Sing Up " />
            </form>
          </div>
        </div>
      </footer>
      {/* <div className={`${Style.copyWriteSection} container`}>
        <div className={Style.copyWrite}>
                <div className={Style.logo}>
                    <h2>Rubel Sikdar</h2>
                </div>
                <div className={Style.icon}>
                    
                </div>
            </div>
        </div> */}
    </div>
  );
};

export default Footer;
