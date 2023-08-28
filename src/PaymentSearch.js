import React from "react";
import "./PaymentSearch.css"

function PaymentSearch() {
  return(
    <input placeholder="Tarea a nombre de cliente"
    className="paymentSearch"
    onChange={(event)=>{
      console.log("Escribiste en el PaymentSearch");
      console.log(event);
      console.log(event.target.value);


    }}
    />
  );
}

export { PaymentSearch };
