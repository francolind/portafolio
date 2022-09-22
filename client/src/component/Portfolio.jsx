import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import web1 from '../assets/web1.jpg'
import web2 from '../assets/web2.jpg'
import web3 from '../assets/web3.jpg'
import web4 from '../assets/web4.jpg'
import web5 from '../assets/web5.jpg'
import web6 from '../assets/web6.jpg'
import '../style/portfolio.css';

export const Portfolio = () => {
    return (
      <section id="Portfolio" className="portfolio">
        <div className="portfolio-headings">
          <h2>MY PORTFOLIO</h2>
          <div className="divider"></div>

          <div className="container">
            <div className="card">
              <img className="card-img" src={web1} alt="" />
              <div className="card-title">
                <h2>Veterinary</h2>
                <Link to={"#"} className="icons">
                  <FaGithub style={{ color: "white", fontSize: "50px" }} />
                </Link>
              </div>
              <button className="poject-details download ">
                poject-datails
              </button>
            </div>
            <div className="card">
              <img className="card-img" src={web2} alt="" />
              <div className="card-title">
                <h2>Trade Cypto</h2>
                <Link to={"#"} className="icons">
                  <FaGithub style={{ color: "white", fontSize: "50px" }} />
                </Link>
              </div>
              <button className="poject-details download ">
                poject-datails
              </button>
            </div>
            <div className="card">
              <img className="card-img" src={web3} alt="" />
              <div className="card-title">
                <h2>Restorant</h2>
                <Link to={"#"} className="icons">
                  <FaGithub style={{ color: "white", fontSize: "50px" }} />
                </Link>
              </div>
              <button className="poject-details download ">
                poject-datails
              </button>
            </div>
            <div className="card">
              <img className="card-img" src={web4} alt="" />
              <div className="card-title">
                <h2>live Rugby</h2>
                <Link to={"#"} className="icons">
                  <FaGithub style={{ color: "white", fontSize: "50px" }} />
                </Link>
              </div>
              <button className="poject-details download ">
                poject-datails
              </button>
            </div>
            <div className="card">
              <img className="card-img" src={web5} alt="" />
              <div className="card-title">
                <h2>Burger</h2>
                <Link to={"#"} className="icons">
                  <FaGithub style={{ color: "white", fontSize: "50px" }} />
                </Link>
              </div>
              <button className="poject-details download ">
                poject-datails
              </button>
            </div>
            <div className="card">
              <img className="card-img" src={web6} alt="" />
              <div className="card-title">
                <h2>Hambuerger</h2>
                <Link to={"#"} className="icons">
                  <FaGithub style={{ color: "white", fontSize: "50px" }} />
                </Link>
              </div>
              <button className="poject-details download ">
                poject-datails
              </button>
            </div>
          </div>
        </div>
        <div className="return">
            <img src="" alt="" />
        </div>
      </section>
    );
};