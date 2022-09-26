import React, { useState } from "react";
import { explore } from "../data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import Modal from "./Modal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle"



const Carousel = () => {
    // data-bs-toggle="modal" data-bs-target="#staticBackdrop"
    let [ isModalOpen, setIsModalOpen ] = useState({
        state : false,
        id : null
    });

    const openModal = (e) => {

        setIsModalOpen(prev => {
            return {
                ...prev,
                state : true,
                id : e.target.id
            }
        })
    }


    return(
        <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        navigation={{nextEl : '.swiper-button-next', prevEl : '.swiper-button-prev'}}
        modules={[Navigation]}
        className="mySwiper"
      >
        <FcNext className="swiper-button-next"/>
        {
            explore.map(item => {
                return <SwiperSlide className="swiper-slide" key={item.id} id={item.id} data-bs-toggle={isModalOpen.state && "modal"} data-bs-target={isModalOpen.state && "#staticBackdrop"}>
                        <img 
                        className="custom-swiper-img"
                        id={item.id}
                        onClick={(e) => openModal(e)}
                        src={item.src} alt={item.alt} />
                    </SwiperSlide>
            })
        }
        <FcPrevious className="swiper-button-prev"/>
      </Swiper>

      {isModalOpen.state && <Modal id={isModalOpen.id} />}
    </>
    )
}

export default Carousel;