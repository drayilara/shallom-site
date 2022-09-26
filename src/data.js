import pin from "./images/pin.png";
import mail from "./images/mail.png";
import logo from "./images/logo.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import chat from "./images/chat.png";
import playground from "./images/playground.png";
import swimming from "./images/swimming.png";
import hall from "./images/hall.png";


// Footer data

const contact = {
    heading : "Contact Us",
    contacts : [
       {
        pin : pin,
        alt : "Location",
        pin_desc : "Address",
        desc : "Lorem location",
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
        {src : facebook, link : "#", alt : "Facebook"}, 
        {src : instagram, link : "#", alt : "Instagram"}, 
        {src : chat, link : "#", alt : "Chat"}
    ]
}

const explore = [
    {
        id : 1,
        src : swimming,
        alt : "swimming",
        heading : "Swimming Pool",
        desc : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"

    },

    {
        id : 2,
        src : playground,
        alt : "playground",
        heading : "Playground",
        desc : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
    },

    {
        id : 3,
        src : hall,
        alt : "hall",
        heading : "Event hall",
        desc : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
    }
]

export { contact, services, socials, explore };