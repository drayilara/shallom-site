import pin from "./images/pin.png";
import mail from "./images/mail.png";
import logo from "./images/logo.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import chat from "./images/chat.png";
import park from "./images/park.jpg";
import swimming from "./images/swimming.jpg";
import playground from "./images/playground.jpg";


// Footer data

const contact = {
    heading : "Contact Us",
    contacts : [
       {
        pin : pin,
        alt : "Location",
        pin_desc : "Address",
        desc : "Shallom parks and events, Alimosho general hospital, Ikotun road, Lagos.",
        href : "#"
       },

       {
        pin : mail,
        alt : "Mail",
        pin_desc : "Email",
        desc : "Lorem mail",
        href : "mailto:ayilarasodiq1@gmail.com"
       }
    ]
}



const services = {
    heading : "Services",
    services : ["Weddings", "Receptions", "Birthday Party", "Event Planning", "Children's Party"]
}


const socials = {
    brand : { src : logo, alt : "Logo" },
    heading : "Follow us",
    social_icons : [
        {src : facebook, link : "https://web.facebook.com/profile.php?id=100069241096184", alt : "Facebook"}, 
        {src : instagram, link : "#", alt : "Instagram"}, 
        {src : chat, link : "https://api.whatsapp.com/send?phone=+2348171896578&text=Hi%20I%20am%20sending%20this%20message%20from%20your%20website.%20I%20would%20like%20to%20make%20an%20enquiry.", alt : "Chat"}
    ]
}

const explore = [
    {
        id : 1,
        src : swimming,
        alt : "swimming",
        heading : "Swimming Pool",
        desc : "Our pool is clean and clear. Actively chlorinated and gentle on the body. Fit for adults and children. Come swim with us!"

    },

    {
        id : 2,
        src : park,
        alt : "playground",
        heading : "Playground",
        desc : "A bouncing castle in the center of our green park. Its sure to keep the kids bouncing and happy."
    },

    {
        id : 3,
        src : playground,
        alt : "hall",
        heading : "Event hall",
        desc : "Joyous rides, happy faces, big smiles. That's all we see everyday on our frictionless carousel."
    }
]

export { contact, services, socials, explore };