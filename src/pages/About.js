import React, { useState } from "react";
const Modal = ({isOpen, onClose, children})=>{
  if(!isOpen) return null;
    return(
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div style={{background: 'white', padding:20, borderRadius:5}}>
          {children}
          <button onClick={onClose}>Sträng</button>
        </div>
      </div>
    )
};

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = ()=>setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <div>
      <p>This is the About page</p>
      <button onClick={openModal}>Visa Modalen</button>
      <Modal isOpen = {isModalOpen} onClose={closeModal}>
        <p>Detta är ett hämligt för alla utom dig</p>
      </Modal>
    </div>
  );
}
