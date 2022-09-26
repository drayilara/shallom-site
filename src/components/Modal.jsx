import React from "react";
import { explore } from "../data";


const Modal = ({ id }) => {

    let businessOffer = explore.filter(item => item.id === Number(id));
    let currentModalItem = businessOffer[0];
    
    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content custom-modal-content">
                        <div className="container-fluid">
                            <div className="row">
                                <img src={currentModalItem.src} alt={currentModalItem.alt} className="col-lg-6 col-md-6 modal-img"/>
                                <div className="col-lg-6 col-md-6">
                                <div className="modal-header custom-modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">{currentModalItem.heading}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>{currentModalItem.desc}</p>
                                </div>
                                <div className="modal-footer custom-modal-footer">
                                    <button type="button" className="btn btn-lg btn-secondary booking-btn">Book</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;