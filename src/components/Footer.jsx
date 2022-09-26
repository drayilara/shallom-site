import { socials, contact, services } from "../data";
import { v4 as key } from 'uuid';




const Footer = () => {
    
    return (

        <div className="footer-container">

            <footer>
                <div className="footer-contact">
                    <h5 className="footer-heading">{contact.heading}</h5>

                    {contact.contacts.map(item => {
                        return <div key={key()}>
                            <article className="contact-icon-wrapper">
                                <img src={item.pin} alt={item.alt} className="contact-icon" key={key}/>
                                <a className="contact-text" href={item.href} key={key()}><p>{item.pin_desc}</p></a>
                            </article>
                            <p>{item.desc}</p>
                        </div>
                    })
                    }
                </div>

            
                <div className="footer-services">
                    <h5 className="footer-heading">{services.heading}</h5>
                    {
                        services.services.map(service => {
                            return <>
                                <p key={key()}>{service}</p>
                            </>
                        })
                    }

                </div>

                <div className="footer-social-links">

                    <img src={socials.brand.src} alt={socials.brand.alt} className="footer-brand"/>

                    <h5 className="footer-heading">{socials.heading}</h5>

                    <div className="social-links-wrapper">
                        {socials.social_icons.map(icon => {
                            return <a key={key()} href={icon.link}><img src={icon.src} alt={icon.alt} key={key()}/></a>
                        })
                        }
                    </div>
                </div>
                  
            </footer>

            <div className="footer-divider"></div>
            <p className="copyright">Copyright {new Date().getFullYear()} Shallom Parks and Events Center - All rights reserved.</p>

        </div>
        
    )
}

export default Footer;