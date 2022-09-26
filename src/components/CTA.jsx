import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";


const CTA = ()  => {


    return(
    <main className="cta-container">
        <h1 className="cta-heading">Let us help you create unforgettable memories.</h1>
        <div className="cta-offers">
            <h5>Events</h5><BsDot className="cta-dot"/>

            <h5>Weddings</h5><BsDot className="cta-dot"/>

            <h5>Receptions</h5>
        </div>
        <div className="cta-btns">
            <Link to="/explore"><button className="cta-btn">Explore</button></Link>

            <Link to="/contact"><button className="cta-btn">Contact Us</button></Link>
        </div>
    </main>
    )
}

export default CTA;