import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClose}
      className="fixed top-0 left-0 w-full h-screen z-20 bg-gray-200/40"
    ></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div className="fixed  top-[20%] md:right-0 right-[10%] mr-4  w-[400px] bg-white p-4 rounded-xl shadow-lg  z-30 ">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
