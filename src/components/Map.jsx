import React, { useRef } from "react";
import chat_icon from "../images/chat-icon.png"
import call_icon from "../images/call-icon.png";
import { GrClose } from "react-icons/gr";
import { AiFillThunderbolt } from "react-icons/ai";
import Footer from "./Footer";


const Map = () => {

    let slider = useRef(null);

    /* Code to insert google maps, requruires google singup and payment payment card details. 
    Get a new API key.
    */


    // useEffect(
    //     () => { 
    //     function loadMap() {

    //         const shallom_park_coordinates = { lat:  6.59704, lng: -3.34134 }

    //         const loader = new Loader({
    //             apiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
    //             version: "weekly",
    //             libraries: ["places"]
    //           });
              
    //           const mapOptions = {
    //             center: shallom_park_coordinates,
    //             zoom: 4
    //           };

    //           loader
    //           .load()
    //           .then((google) => {
    //             const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //             const marker = new google.maps.Marker({
    //                 position: shallom_park_coordinates,
    //                 map: map
    //               });


    //           })
    //           .catch(err => {
    //             console.log("Error displaying map : " + err.message);
    //           });
    //     }
    //     // problem loading map due to billing issues
    //     loadMap();
    // }
    // , []); 


    const openSlider = () => {
        slider.current.classList.add("open_slider");
    }

    const closeSlider = () => {
        slider.current.classList.remove("open_slider");
    }

    return(
        <>

            <div id="map">
            <div>
            <button 
            className="map_btn"
            onClick={openSlider}
            ><AiFillThunderbolt /> Contact us fast!
            </button>
            </div>
            </div>
            <Footer />

            <div className="map_contact" ref={slider}>

                <GrClose 
                onClick={closeSlider}
                className="slider_closer" 
                />

                <h3>Contact Us</h3>
                
                <div className="map_whatsapp">

                    <a className="map_contact-link animate__animated animate__pulse animate__infinite" href="https://api.whatsapp.com/send?phone=+2348171896578&text=Hi%20I%20am%20sending%20this%20message%20from%20your%20website.%20I%20would%20like%20to%20make%20an%20enquiry."><img src={chat_icon} alt="chat-icon" className="map_icon" /></a>
                    <a href="https://api.whatsapp.com/send?phone=+2348171896578&text=Hi%20I%20am%20sending%20this%20message%20from%20your%20website.%20I%20would%20like%20to%20make%20an%20enquiry."><p className="map_icon_text">Whatsapp</p></a>

                </div>

                <div className="map_phone_number">

                    <a className="map_contact-link map_contact-link animate__animated animate__pulse animate__infinite" href="tel:+234-905-2403-088"><img src={call_icon} alt="call-icon" className="map_icon animate__animated animate__flash animate__repeat__infinite" /></a>
                    <a href="tel:+234-817-1896-578"><p className="map_icon_text">Place call</p></a>

                </div>
            </div>

        </>
        
    ) 
}

export default Map;

// Google map API react package https://www.npmjs.com/package/@googlemaps/js-api-loader