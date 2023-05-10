import React from 'react'
import Payment from '../Payment';

function PaymentModel({ message, show, onHide, onConfirm }) {
    const modalStyle = {
        display: show ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: " 1px solid rgb(76, 196, 36)",
        borderRadius: "10px",
    };
    
  
    return (
      <div className="modal" style={modalStyle} >
        <i class="bi bi-x" onClick={onHide} style={{color:"white",fontSize:"40px",float:"right",cursor:"pointer"}}></i>
        <Payment/>
      </div>
    );
  }
  
  export default PaymentModel;